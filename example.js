import cn from 'classnames';

const sharedBtnClasses = {
  btn: true,
  'btn-primary': true,
}

const leftBtnClass = {
  ...sharedBtnClasses,
  'disabled': mode === 'savemode',
}

return (
  <div className={cn(leftBtnClass)}>

  </div>
)
