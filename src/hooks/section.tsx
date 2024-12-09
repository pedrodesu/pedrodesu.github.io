import { useContext } from 'solid-js'
import { type ISectionHook, SectionContext } from '~/context/section'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const useSection = (): ISectionHook => useContext(SectionContext)!
