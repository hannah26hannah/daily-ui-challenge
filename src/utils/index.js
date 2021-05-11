import { useLocation } from 'react-router-dom';

export function spliceDateString(stringDate) {
  return stringDate.substring(0, 10);
}

// 'Sign Up/In' -> 'sign-up-in'
export function getProperPath(dataTitle) {
  return dataTitle.toLowerCase().split(/\s|\//).join('-')
}

export function useQuery() {
  return new URLSearchParams(useLocation().search)
}



