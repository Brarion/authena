import React from 'react'

import styles from './styles.module.scss'

interface SearchProps {
  value: string
  onChange: (value: string) => void
  StartIcon?: React.FC
  placeholder?: string
  type?: string
  disabled?: boolean
}

export const Search = ({ value, onChange, placeholder, type, disabled, StartIcon }: SearchProps) => {
  return (
    <div className={styles.wrapper}>
      {StartIcon !== undefined && <StartIcon />}
      <input
        placeholder={placeholder}
        type={type ?? 'text'}
        disabled={disabled}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={styles.input}
      />
    </div>
  )
}
