import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
  projectId: 'l1myt0ib',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

export async function fetchSiteSettings() {
  const query = `*[_type == "siteSettings"][0]`
  return client.fetch(query)
}

export async function fetchHero() {
  const query = `*[_type == "hero"][0]`
  return client.fetch(query)
}

export async function fetchServices() {
  const query = `*[_type == "service"] | order(order asc)`
  return client.fetch(query)
}

export async function fetchStats() {
  const query = `*[_type == "stat"] | order(order asc)`
  return client.fetch(query)
}

export async function fetchWhyRows() {
  const query = `*[_type == "whyRow"] | order(order asc)`
  return client.fetch(query)
}

export async function fetchCertifications() {
  const query = `*[_type == "certification"] | order(order asc)`
  return client.fetch(query)
}

export async function fetchProjects() {
  const query = `*[_type == "project"] | order(order asc)`
  return client.fetch(query)
}

export async function fetchTeamMembers() {
  const query = `*[_type == "teamMember"] | order(order asc)`
  return client.fetch(query)
}

export async function fetchJobListings() {
  const query = `*[_type == "jobListing"] | order(order asc)`
  return client.fetch(query)
}

export async function fetchKnowledgeArticles() {
  const query = `*[_type == "knowledgeArticle"] | order(order asc)`
  return client.fetch(query)
}

export async function fetchPageContent() {
  const query = `*[_type == "pageContent"]`
  return client.fetch(query)
}

export async function fetchAllContent() {
  const [siteSettings, hero, services, stats, whyRows, certifications, projects, teamMembers, jobListings, knowledgeArticles, pageContent] = await Promise.all([
    fetchSiteSettings(),
    fetchHero(),
    fetchServices(),
    fetchStats(),
    fetchWhyRows(),
    fetchCertifications(),
    fetchProjects(),
    fetchTeamMembers(),
    fetchJobListings(),
    fetchKnowledgeArticles(),
    fetchPageContent(),
  ])
  return {siteSettings, hero, services, stats, whyRows, certifications, projects, teamMembers, jobListings, knowledgeArticles, pageContent}
}

export default client
