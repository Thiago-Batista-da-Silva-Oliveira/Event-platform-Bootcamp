import {CheckCircle, Lock} from 'phosphor-react'
import {format, isPast} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames'

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class'
}

export const Lesson = ({title, availableAt,slug,type}:LessonProps) => {
  const {slug : activedSlug} = useParams<{slug: string}>()
  const isLessonAvailable = isPast(availableAt)
  const availableDateFormatted = format(availableAt, "EEEE' * 'd' de 'MMMM' * 'K'h'mm", {
    locale: ptBR,
  })

  const isActiveLesson = activedSlug === slug



  return (
        <Link to={`/event/lesson/${slug}`} className='group'>
           <span className="text-gray-300">
             {availableDateFormatted}
           </span>
           <div className={classNames(`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500`, {
            'bg-green-500' : isActiveLesson
           })}>
              <header className="flex items-center justify-between">
               {
                  isLessonAvailable ? (
                    <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
                    <CheckCircle size={20}/>
                     Conteúdo liberado
                 </span>
                  ) : (
                    <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                    <Lock size={20}/>
                     Em breve
                 </span>
                  )
               }
                <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold">
                    {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                </span>
              </header>
              <strong className={classNames("mt-5 block", {
                'text-white': isActiveLesson,
                'text-gray-200' : !isActiveLesson
              })}>
               {title}
              </strong>
           </div>
        </Link>
    )
}