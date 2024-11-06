import { useContext } from 'solid-js'
import { type ISectionHook, SectionContext } from '~/context/section'

export const useSection = (): ISectionHook => useContext(SectionContext) as ISectionHook
