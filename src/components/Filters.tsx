import { TODO_FILTERS, FILTERS_BUTTONS } from '../consts'
import { type FilterValue } from '../types'
interface Props {
  onFilterChange: (filter: FilterValue) => void
  filterSelected: FilterValue
}

const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }): JSX.Element => {
  const handleClick = (filter: FilterValue) => {

  }
  return (
    <ul>
        {
            Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
              const isSelected = key === filterSelected
              const className = isSelected ? 'selected' : ''
              return (
                    <li key={key}>
                      <a className={className} href={href} onClick={handleClick(key)}> {literal} </a>
                    </li>

              )
            })
        }
    </ul>
  )
}

export default Filters
