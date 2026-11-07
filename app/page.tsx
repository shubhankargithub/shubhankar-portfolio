import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Timeline } from "@/components/timeline";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Rationale } from "@/components/rationale";
import { EditorialInterests } from "@/components/editorial-interests";
import { ArticleIdeas } from "@/components/article-ideas";
import { Contact } from "@/components/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Timeline />
      <Experience />
      <Skills />
      <Projects />
      <Rationale />
      <EditorialInterests />
      <ArticleIdeas />
      <Contact />
    </>
  );
}
