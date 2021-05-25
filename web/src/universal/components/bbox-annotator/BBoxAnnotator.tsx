import React, {useRef, useEffect, useState, useCallback} from 'react'
import BBoxSelector from './BBoxSelector'
import {colorByIndex} from 'universal/utils/getColor'
import _ from 'lodash'

export type EntryType = {
  x: number
  y: number
  w: number
  h: number
  category: string
  color: string
}
type Props = {
  url: string
  selectedLabel: any
  onChange: (entries: EntryType[]) => void
  borderWidth?: number
  objects: any
  disabled: boolean
  highlightIndex?: number
}
const BBoxAnnotator: React.FC<Props> = ({
  url,
  borderWidth = 2,
  selectedLabel,
  onChange,
  objects,
  disabled,
  highlightIndex
}) => {
  const [pointer, setPointer] = useState<{x: number; y: number} | null>(null)
  const [offset, setOffset] = useState<{x: number; y: number} | null>(null)
  const [entries, setEntries] = useState<EntryType[]>(objects)

  useEffect(() => {
    onChange(
      entries.map((entry) => ({
        w: +parseFloat(entry.w).toFixed(2),
        h: +parseFloat(entry.h).toFixed(2),
        y: +parseFloat(entry.y).toFixed(2),
        x: +parseFloat(entry.x).toFixed(2),
        category: entry.category,
        color: entry.color
      }))
    )
  }, [entries])

  useEffect(() => {
    if (
      Array.isArray(objects) &&
      Array.isArray(entries) &&
      !_.isEqual(objects.sort(), entries.sort())
    ) {
      setEntries(objects)
    }
  }, [objects])

  const [status, setStatus] = useState<'free' | 'hold' | 'moved'>('free')
  const [imageFrameStyle, setImageFrameStyle] = useState<{
    width?: number
    height?: number
    backgroundImageSrc?: string
  }>({})

  const bBoxImageRef = useRef<HTMLImageElement>(null)
  useEffect(() => {
    const imageElement = new Image()
    imageElement.src = url
    imageElement.onload = () => {
      const width = imageElement.width
      const height = imageElement.height
      setImageFrameStyle({
        backgroundImageSrc: imageElement.src,
        width: width,
        height: height
      })
    }
  }, [bBoxImageRef, url])

  const crop = (pageX: number, pageY: number) => {
    const x =
      bBoxImageRef.current && imageFrameStyle.width
        ? (Math.min(
            Math.max(Math.round(pageX - bBoxImageRef.current.getBoundingClientRect().x), 0),
            bBoxImageRef.current?.offsetWidth
          ) /
            bBoxImageRef.current?.offsetWidth) *
          100
        : 0

    const y =
      bBoxImageRef.current && imageFrameStyle.height
        ? (Math.min(
            Math.max(Math.round(pageY - bBoxImageRef.current.getBoundingClientRect().y), 0),
            bBoxImageRef.current?.offsetHeight
          ) /
            bBoxImageRef.current?.offsetHeight) *
          100
        : 0

    return {x, y}
  }
  const updateRectangle = (pageX: number, pageY: number) => {
    setPointer(crop(pageX, pageY))
  }

  useEffect(() => {
    if (!disabled) {
      const mouseMoveHandler = (e: MouseEvent) => {
        e.preventDefault()
        if (status === 'moved') {
          updateRectangle(e.pageX, e.pageY)
        }
      }

      bBoxImageRef.current?.addEventListener('mousemove', mouseMoveHandler)
      return () => bBoxImageRef.current?.removeEventListener('mousemove', mouseMoveHandler)
    }
  }, [status])

  const mouseDownHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()
    if (e.button !== 2 && !disabled) {
      setOffset(crop(e.pageX, e.pageY))
      setPointer(crop(e.pageX, e.pageY))
      setStatus('hold')
    }
  }

  const mouseMoveHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()
    const currentPointer = crop(e.pageX, e.pageY)
    setPointer(currentPointer)
    const hasMoved = currentPointer.x !== offset?.x && currentPointer.y !== offset?.y
    if (status === 'hold' && hasMoved) {
      setStatus('moved')
    }
  }

  const rectangle = useCallback(() => {
    const x1 = offset && pointer ? Math.min(offset.x, pointer.x) : 0
    const x2 = offset && pointer ? Math.max(offset.x, pointer.x) : 0
    const y1 = offset && pointer ? Math.min(offset.y, pointer.y) : 0
    const y2 = offset && pointer ? Math.max(offset.y, pointer.y) : 0

    return {
      x: x1,
      y: y1,
      w: x2 - x1,
      h: y2 - y1
    }
  }, [pointer, offset])

  const rect = rectangle()
  const boxRef = useRef()

  useEffect(() => {
    if (!disabled) {
      const mouseUpHandler = (e: MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        if (status === 'moved') {
          updateRectangle(e.pageX, e.pageY)
          setEntries([
            ...entries,
            {...rect, category: selectedLabel.tag, color: selectedLabel.color}
          ])
        }
        setStatus('free')
      }
      boxRef?.current?.addEventListener('mouseup', mouseUpHandler)
      return () => boxRef?.current?.removeEventListener('mouseup', mouseUpHandler)
    }
  }, [boxRef, status, rect])

  return (
    <div
      onMouseDownCapture={mouseDownHandler}
      onMouseMoveCapture={mouseMoveHandler}
      draggable={false}
      ref={boxRef}
    >
      <div
        draggable={false}
        style={{
          width: `100%`,
          position: 'relative',
          float: `left`,
          cursor: !disabled ? 'crosshair' : 'auto'
        }}
      >
        <img
          draggable={false}
          style={{
            maxWidth: `100%`,
            maxHeight: `100%`,
            float: `left`
          }}
          ref={bBoxImageRef}
          src={imageFrameStyle.backgroundImageSrc}
        />
        {status === 'moved' ? <BBoxSelector rectangle={rect} color={selectedLabel.color} /> : null}
        {entries.map((entry, i) => (
          <div
            draggable={false}
            style={{
              border: `${borderWidth}px solid ${entry.color || colorByIndex(i)}`,
              position: 'absolute',
              top: `${entry.y}%`,
              left: `${entry.x}%`,
              width: `${entry.w}%`,
              height: `${entry.h}%`,
              pointerEvents: 'none'
            }}
            key={i}
          >
            <div
              draggable={false}
              style={{
                width: `100%`,
                height: `100%`,
                background: `${entry.color || colorByIndex(i)}`,
                opacity: highlightIndex === i ? `0.5` : `0.2`
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default BBoxAnnotator
