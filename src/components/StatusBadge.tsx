import type { Status } from '../types'

const classes: Record<Status, string> = {
  'записан': 'badge--wait',
  'выполнено': 'badge--done',
  'отменено': 'badge--cancel',
  'не пришел': 'badge--cancel',
}

function StatusBadge({ status }: { status: Status }) {
  return <span className={'badge ' + classes[status]}>{status}</span>
}

export default StatusBadge
