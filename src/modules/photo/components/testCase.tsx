import React from 'react'
import classNames from 'classnames'

import { Dictionary } from '@/apollo'
import { camelCaseToSentence } from '@/utils'

import { ProcessingStatus } from '@/types'

interface Props {
  status: ProcessingStatus
  failed: Dictionary[]
  passed: Dictionary[]
  items: any[]
}

const TestCase: React.FC<Props> = ({ status, failed, passed, items }) => (
  <div className="list">
    <ul>
      {status === ProcessingStatus.notStarted &&
        items?.map((item, index) => (
          <li key={`l_${index}`} className="loading ">
            <span className="text">{item.requirement_label[0].text}</span>
          </li>
        ))}
      {status === ProcessingStatus.loading &&
        items.map((item, index) => (
          <li
            key={`l_${index}`}
            className={classNames({
              loading: status === ProcessingStatus.loading,
            })}>
            <span className="icon" />
            <span className="text">{item.requirement_label[0].text}</span>
          </li>
        ))}
      {status === ProcessingStatus.failed &&
        failed.map((f, index) => (
          <li key={`f_${index}`}>
            <span className="icon" />
            <span className="text">{f.message}</span>
          </li>
        ))}
      {status === ProcessingStatus.success &&
        passed.map((p, index) => (
          <li key={`p_${index}`}>
            <span className="icon" />
            <span className="text">{camelCaseToSentence(p.test ?? '')}</span>
          </li>
        ))}
    </ul>
  </div>
)

export default TestCase
