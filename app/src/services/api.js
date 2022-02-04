import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8081/api'

export async function getAll_FeedBack() {
  const { data } = await axios.get(`/feedbacks`)
  return data
}
export async function getById_FeedBack(id) {
  const { data } = await axios.get(`/feedbacks/${id}`)
  return data
}

export async function add_FeedBack(Data) {
  const { data } = await axios.post(`/feedbacks`, Data)
  return data
}

export async function upDate_FeedBack(Data) {
  const { data } = await axios.put(`/feedbacks`, Data)
  return data
}

export async function delete_FeedBackById(id) {
  await axios.delete(`/feedbacks/${id}`)
}
