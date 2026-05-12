import ProjectDetailClient from "../../../components/ProjectDetailClient";
import { projectsData } from "../../../data/mockData";
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetail({ params }) {
  const { slug } = params;
  const project = projectsData.find(p => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Find next project
  const currentIndex = projectsData.findIndex(p => p.slug === slug);
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  return (
    <ProjectDetailClient project={project} nextProject={nextProject} />
  );
}
