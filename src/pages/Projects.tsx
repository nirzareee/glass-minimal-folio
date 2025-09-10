import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projects, skills } from '@/data/mockData';

const Projects = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedSkill, setSelectedSkill] = useState<string | null>(
    searchParams.get('skill')
  );
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    if (selectedSkill) {
      const filtered = projects.filter(project =>
        project.skills.some(skill => 
          skill.toLowerCase() === selectedSkill.toLowerCase()
        )
      );
      setFilteredProjects(filtered);
    } else {
      setFilteredProjects(projects);
    }
  }, [selectedSkill]);

  const handleSkillFilter = (skillName: string) => {
    if (selectedSkill === skillName) {
      setSelectedSkill(null);
      setSearchParams({});
    } else {
      setSelectedSkill(skillName);
      setSearchParams({ skill: skillName });
    }
  };

  const clearFilter = () => {
    setSelectedSkill(null);
    setSearchParams({});
  };

  // Get unique skills from projects
  const projectSkills = Array.from(
    new Set(projects.flatMap(project => project.skills))
  ).sort();

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Showcasing some of my recent work and experiments
          </p>
        </motion.div>

        {/* Skill Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card mb-8"
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <h3 className="text-lg font-medium">Filter by skill:</h3>
            {selectedSkill && (
              <Button
                variant="outline"
                size="sm"
                onClick={clearFilter}
                className="glass border-white/20 hover:bg-white/20"
              >
                Clear Filter
              </Button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {projectSkills.map((skill) => (
              <motion.button
                key={skill}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSkillFilter(skill)}
                className={`skill-chip ${
                  selectedSkill === skill ? 'active' : ''
                }`}
              >
                {skill}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="project-card group"
              >
                {/* Project Image */}
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {project.featured && (
                    <div className="absolute top-3 right-3 glass rounded-full px-2 py-1 text-xs font-medium">
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <h3 className="text-xl font-semibold mb-2 group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-foreground/80 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="glass rounded-full px-2 py-1 text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  {project.liveUrl && (
                    <Button
                      asChild
                      size="sm"
                      className="flex-1"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.sourceUrl && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className={`glass border-white/20 hover:bg-white/20 ${
                        project.liveUrl ? '' : 'flex-1'
                      }`}
                    >
                      <a
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Source
                      </a>
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="glass-card max-w-md mx-auto">
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-muted-foreground mb-4">
                No projects match the selected skill: {selectedSkill}
              </p>
              <Button onClick={clearFilter} variant="outline" className="glass border-white/20 hover:bg-white/20">
                Clear Filter
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;