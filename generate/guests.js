import {resolve} from 'path'
import renderComponentToFile from './renderComponentToFile'

import {flatten, unique} from 'lodash'

import {episodes} from '../episodes'
import Guests from '../src/pages/guests'
import {sortPeople} from '../shared/utils'

const guests = sortPeople(
  unique(
    flatten(episodes.map(e => e.guests))
      .filter(g => g.name !== 'TBA'),
    g => (g.twitter || g.name)
  )
)

renderComponentToFile(
  <Guests guests={guests} />,
  resolve(__dirname, '../guests/index.html')
)
