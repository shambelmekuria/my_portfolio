import Section from "./section";
import { SectionDescription, SectionHeader } from "./section.header";
import Skill, { type SkillProps } from "./skill";

/* -------------------------------------------------------------------------- */
/*                                    Data                                    */
/* -------------------------------------------------------------------------- */

type SkillData = Pick<SkillProps, "title" | "percent" | "subtitle" | "color">;

const skills: readonly SkillData[] = [
  {
    title: "HTML & CSS",
    percent: 90,
    subtitle: "Building responsive and accessible web interfaces.",
    color: "coral",
  },
  {
    title: "JavaScript",
    percent: 80,
    subtitle: "Developing interactive and dynamic web applications.",
    color: "amber",
  },
  {
    title: "WordPress",
    percent: 85,
    subtitle: "Creating and customizing WordPress websites.",
    color: "blue",
  },
  {
    title: "Python",
    percent: 70,
    subtitle: "Programming fundamentals and application development.",
    color: "green",
  },
  {
    title: "React & Next.js",
    percent: 70,
    subtitle: "Building modern component-based web applications.",
    color: "purple",
  },
  {
    title: "Database Management",
    percent: 65,
    subtitle: "Working with relational databases and data management.",
    color: "teal",
  },
];

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */

export default function SkillSection() {
  return (
    <Section size="sm" id="skills" aria-labelledby="skills-heading">
      <header className="mx-auto mb-10 max-w-2xl space-y-4 text-center md:mb-14">
        <SectionHeader id="skills-heading" size="sm">
          My Skills
        </SectionHeader>

        <SectionDescription>
          My technical skills and experience in web design, development, and
          digital technologies.
        </SectionDescription>
      </header>

      <ul
        role="list"
        className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6"
      >
        {skills.map((skill) => (
          <li key={skill.title}>
            <Skill {...skill} size="lg" />
          </li>
        ))}
      </ul>
    </Section>
  );
}
