import Head from 'next/head'
import styles from '@/pages/index.module.css'
import Bars from '@/components/Bars'
import Container from '@/components/Container'
import Controllers from '@/components/Controllers'
import Button from '@/components/Button'
import React, { useEffect, useState } from 'react'
import DropDown from '@/components/DropDown'
import { SelectChangeEvent } from '@mui/material/Select'
import ButtonGroup from '@mui/material/ButtonGroup'
import { InputLabel } from '@mui/material'

type ProgressLabels = 'Progress1' | 'Progress2' | 'Progress3'

export default function Home () {
  const [progressOne, setProgressOne] = useState<number>(0)
  const [progressTwo, setProgressTwo] = useState<number>(0)
  const [progressThree, setProgressThree] = useState<number>(0)

  const [updateValue, setUpdateValue] = useState<number>(0)

  const [selectedProgress, setSelectedProgress] =
    useState<ProgressLabels>('Progress1')

  const handler = (e: React.ChangeEvent<HTMLButtonElement>) => {
    setUpdateValue(Number(e.target.value))
  }

  const dropDownHandler = (e: SelectChangeEvent) => {
    e.preventDefault()
    setSelectedProgress(e.target.value as ProgressLabels)
  }

  function numberFilter (progressValue: number, updateValue: number): number {
    if (progressValue + updateValue < 0) {
      return 0
    }
    return progressValue + updateValue
  }

  useEffect(() => {
    // type guard NaN
    if (!updateValue) {
      return
    }
    if (selectedProgress === 'Progress1') {
      setProgressOne(numberFilter(progressOne, updateValue))
    }
    if (selectedProgress === 'Progress2') {
      setProgressTwo(numberFilter(progressTwo, updateValue))
    }
    if (selectedProgress === 'Progress3') {
      setProgressThree(numberFilter(progressThree, updateValue))
    }
    return setUpdateValue(0)
  }, [progressOne, progressThree, progressTwo, selectedProgress, updateValue])

  return (
    <div className={styles.container}>
      <Head>
        <title>Optus Progress Bar</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1 className={styles.title}>Progress Bar</h1>
        <Container>
          {[progressOne, progressTwo, progressThree].map((el, i) => (
            <Bars key={i} percentage={el} />
          ))}
          <Controllers>
            <div>
              <InputLabel size='normal' id='demo-simple-select-label'>
                Select Progression
              </InputLabel>
              <ButtonGroup variant='outlined'>
                {[-25, -10, 10, 25].map((el, i) => (
                  <Button handler={handler} key={i} value={el} />
                ))}
              </ButtonGroup>
            </div>
            <DropDown progress={selectedProgress} handler={dropDownHandler} />
          </Controllers>
        </Container>
      </main>
    </div>
  )
}
