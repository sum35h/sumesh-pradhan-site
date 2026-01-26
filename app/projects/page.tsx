import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

export default function ProjectsPage() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-semibold">Projects</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map(p => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}
