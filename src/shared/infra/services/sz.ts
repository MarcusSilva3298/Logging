import axios from 'axios'

export const sz = axios.create({
  baseURL: 'https://interas.sz.chat/api/v4'
})
