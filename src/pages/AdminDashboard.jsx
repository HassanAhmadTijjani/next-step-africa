// @ts-nocheck
import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import supabase from '../supabaseClient'

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [opportunities, setOpportunities] = useState([])
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    deadline: '',
    summary: '',
    apply_link: '',
    published: true,
  })
  useEffect(() => {
    fetchOpportunities()
  }, [])

  // Fetch all data
  async function fetchOpportunities() {
    const { data, error } = await supabase.from('opportunities').select('*').order('created_at', { ascending: false })
    if (error) {
      console.log('Error: ', error);
    } else {
      setOpportunities(data)
    }
    setLoading(false)
  }

  // Add
  async function handleAdd() {
    const { error } = await supabase.from('opportunities').insert([formData])
    if (error) {
      console.log('Error adding: ', error);
    } else {
      setFormData({
        title: '',
        category: '',
        deadline: '',
        summary: '',
        apply_link: '',
        published: true,
      })
      fetchOpportunities()
    }
  }

  // Delete
  async function handleDelete(id) {
    const {error} = await supabase.from('opportunities').delete().eq('id', id)
    if (error) {
      console.log('Error deleting:', error)
    } else {
      fetchOpportunities()
    }
  }

  // Logout
  async function logout() {
    await supabase.auth.signOut()
    navigate('/admin/login')
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  if (loading) {
    return (
      <div className="text-center py-20">
        <div className="animate-spin rounded-full h-24 w-24 border-b-4 m-auto border-gray-900 "></div>
        <p className="text-gray-500">Loading dashboard...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">
          NextStep Africa — Admin
        </h1>
        <button
          onClick={logout}
          className="text-sm text-red-500 hover:text-red-700 font-medium"
        >
          Logout 
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="bg-white rounded-xl shadow-md p-6 mb-10">
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            Add New Opportunity
          </h2>

          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Opportunity title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select category</option>
                <option value="Scholarship">Scholarship</option>
                <option value="Fellowship">Fellowship</option>
                <option value="Internship">Internship</option>
                <option value="Job">Job</option>
                <option value="Announcement">Announcement</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Deadline
              </label>
              <input
                type="date"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Summary
              </label>
              <textarea
                name="summary"
                value={formData.summary}
                onChange={handleChange}
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write a short summary of the opportunity"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Apply Link
              </label>
              <input
                type="url"
                name="apply_link"
                value={formData.apply_link}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="https://..."
              />
            </div>

            <button
              onClick={handleAdd}
              className="bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700"
            >
              Add Opportunity
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            All Opportunities
          </h2>

          {opportunities.length === 0 ? (
            <p className="text-gray-500 text-sm">No opportunities yet.</p>
          ) : (
            <div className="flex flex-col gap-4">
              {opportunities.map((item) => (
                <div
                  key={item.id}
                  className="border border-gray-200 rounded-lg px-4 py-3 flex justify-between items-center"
                >
                  <div>
                    <p className="font-medium text-gray-800">{item.title}</p>
                    <p className="text-xs text-gray-500">
                      {item.category} — Deadline: {item.deadline}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-sm text-red-500 hover:text-red-700 font-medium ml-4"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard