import { projects } from '../projects'

describe('projects data', () => {
  it('exports an array of projects', () => {
    expect(Array.isArray(projects)).toBe(true)
    expect(projects.length).toBeGreaterThan(0)
  })

  it('each project has required fields', () => {
    projects.forEach((project) => {
      expect(project).toHaveProperty('slug')
      expect(project).toHaveProperty('title')
      expect(project).toHaveProperty('description')
      expect(project).toHaveProperty('tech')
      
      expect(typeof project.slug).toBe('string')
      expect(typeof project.title).toBe('string')
      expect(typeof project.description).toBe('string')
      expect(Array.isArray(project.tech)).toBe(true)
    })
  })

  it('tech array contains strings', () => {
    projects.forEach((project) => {
      project.tech.forEach((tech) => {
        expect(typeof tech).toBe('string')
        expect(tech.length).toBeGreaterThan(0)
      })
    })
  })

  it('github and demo fields are optional strings when present', () => {
    projects.forEach((project) => {
      if (project.github) {
        expect(typeof project.github).toBe('string')
        expect(project.github).toMatch(/^https?:\/\//)
      }
      
      if (project.demo) {
        expect(typeof project.demo).toBe('string')
        expect(project.demo).toMatch(/^https?:\/\//)
      }
    })
  })

  it('slugs are unique', () => {
    const slugs = projects.map(p => p.slug)
    const uniqueSlugs = new Set(slugs)
    
    expect(slugs.length).toBe(uniqueSlugs.size)
  })

  it('titles are non-empty', () => {
    projects.forEach((project) => {
      expect(project.title.trim().length).toBeGreaterThan(0)
    })
  })

  it('descriptions are non-empty', () => {
    projects.forEach((project) => {
      expect(project.description.trim().length).toBeGreaterThan(0)
    })
  })
})
