/*
 * @Author: Tina Huang
 * @Date: 2024-08-23 09:40:47
 * @LastEditors: Tina Huang
 * @LastEditTime: 2024-08-23 23:34:35
 * @Description: 
 */
import * as React from 'react'
import Circle from './svg/circle'
import Check from './svg/check'

const TodoItemCard = () => {

  const list = [
    {checked: false, content: 'Create user flow'},

    {checked: true, content: 'Make wireframe'},
  ]

  const percent = React.useMemo(() => {
    const _checked = list.filter(current => current.checked)
    return `${Math.round(1000*_checked.length / list.length)/10}%`
  }, [list])

  const CheckItem = (props: { checked: boolean, content: string }) => {
    const { checked = false, content } = props
    return <p className='todo__check_item'>
      {!checked?<Circle />:<Check />}
      {content}
      </p>
  }

  return <div className='todo__item'>
    <p className="todo__tags"><span># work</span><span># High</span></p>
    <h5 className='todo__title'>Search inspirations for upcoming project</h5>
    <div className="todo__progress">
      <div className="progress_box">
        <div className="progress_inner" progress-percent={percent} style={{width: percent}}></div>
      </div>
      <div className="progress_percent">{percent}</div>
    </div>
    <div className="todo__list">
      {list.map(item => <CheckItem {...item} />)}
    </div>
  </div>
}

export const TodoView = (props: { files: any }) => {
  const {files} = props
  console.log(files)
  return <div className='todo__box'>
    <h4>Todo list</h4>
    <TodoItemCard />
    {/* {files.map((file: { basename: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined }) => <p>{file.basename}</p>)} */}
  </div>
}