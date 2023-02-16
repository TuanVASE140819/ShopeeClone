import { useRef, useState, useId } from 'react'
import { arrow, FloatingPortal, shift, useFloating, offset } from '@floating-ui/react-dom-interactions'
import { motion, AnimatePresence } from 'framer-motion'

interface Props {
  children: React.ReactNode
  renderPopover: React.ReactNode
  className?: string
  as?: React.ElementType
  initialOpen?: boolean
}

export default function Popover({ children, renderPopover, className, as: Element = 'div', initialOpen }: Props) {
  const [open, setOpen] = useState(true)
  const arrowRef = useRef<HTMLElement>(null)
  const { x, y, reference, floating, strategy, middlewareData } = useFloating({
    middleware: [
      offset(6),
      shift(),
      arrow({
        element: arrowRef
      })
    ]
  })

  const id = useId()

  const showPopover = () => {
    setOpen(true)
  }
  const hidePopover = () => {
    setOpen(false)
  }
  //   flex cursor-pointer items-center py-1 hover:text-gray-300
  return (
    <div className='flex justify-end'>
      <div className={className} ref={reference} onMouseEnter={showPopover} onMouseLeave={hidePopover}>
        {children}

        <FloatingPortal id={id}>
          <AnimatePresence>
            {open && (
              <motion.div
                ref={floating}
                style={{
                  position: strategy,
                  top: y ?? 0,
                  left: x ?? 0,
                  width: 'max-content',
                  transformOrigin: `${middlewareData.arrow?.x}px top`
                }}
                initial={{ opacity: 0, transform: 'scale(0)' }}
                animate={{ opacity: 1, transform: 'scale(1)' }}
                exit={{ opacity: 0, transform: 'scale(0)' }}
                transition={{ duration: 0.2 }}
              >
                <span
                  ref={arrowRef}
                  className='absolute h-4 w-4 rotate-45 transform bg-white'
                  style={{
                    left: middlewareData?.arrow?.x,
                    top: middlewareData?.arrow?.y
                  }}
                />

                {renderPopover}
              </motion.div>
            )}
          </AnimatePresence>
        </FloatingPortal>
      </div>
    </div>
  )
}
