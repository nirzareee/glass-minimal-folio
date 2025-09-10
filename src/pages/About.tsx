import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { personalInfo, skills } from '@/data/mockData';

const About = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const navigate = useNavigate();

  const skillCategories = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const handleSkillClick = (skillName: string) => {
    setSelectedSkill(skillName);
    // Navigate to projects page with skill filter
    navigate(`/projects?skill=${encodeURIComponent(skillName)}`);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Get to know more about my journey and expertise
          </p>
        </motion.div>

        {/* Long Bio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card mb-12"
        >
          <h2 className="text-2xl font-semibold mb-4 gradient-text">My Story</h2>
          <div className="text-foreground/80 leading-relaxed space-y-4">
            {personalInfo.longBio.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass-card mb-12"
        >
          <h2 className="text-2xl font-semibold mb-6 gradient-text">Soft Skills</h2>
          <div className="flex flex-wrap gap-3">
            {personalInfo.softSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="skill-chip"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-card"
        >
          <h2 className="text-2xl font-semibold mb-6 gradient-text">Technical Skills</h2>
          <p className="text-muted-foreground mb-6">
            Click on any skill to see related projects
          </p>
          
          {Object.entries(skillCategories).map(([category, categorySkills]) => (
            <div key={category} className="mb-8 last:mb-0">
              <h3 className="text-lg font-medium mb-4 text-primary">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {categorySkills.map((skill, index) => (
                  <motion.button
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSkillClick(skill.name)}
                    className={`skill-chip group ${
                      selectedSkill === skill.name ? 'active' : ''
                    }`}
                  >
                    <span>{skill.name}</span>
                    <span className="ml-2 text-xs opacity-60 group-hover:opacity-80">
                      ({skill.count})
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;