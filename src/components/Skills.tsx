import { Code, Database, Cloud, BarChart3, Brain, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'Python', level: 95 },
        { name: 'SQL', level: 90 },
        { name: 'R', level: 85 },
        { name: 'JavaScript', level: 80 }
      ]
    },
    {
      title: 'Machine Learning & AI',
      icon: Brain,
      skills: [
        { name: 'PyTorch', level: 90 },
        { name: 'TensorFlow', level: 85 },
        { name: 'Transformers', level: 88 },
        { name: 'LangChain', level: 85 }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      skills: [
        { name: 'Google Cloud Platform', level: 85 },
        { name: 'Microsoft Power Platform', level: 90 },
        { name: 'Docker', level: 80 },
        { name: 'Oracle Database', level: 75 }
      ]
    },
    {
      title: 'Databases',
      icon: Database,
      skills: [
        { name: 'MySQL', level: 90 },
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Redis', level: 75 }
      ]
    },
    {
      title: 'Data Visualization',
      icon: BarChart3,
      skills: [
        { name: 'Power BI', level: 92 },
        { name: 'Matplotlib', level: 88 },
        { name: 'Seaborn', level: 85 },
        { name: 'Plotly', level: 80 }
      ]
    }
  ];

  const achievements = [
    {
      title: 'Runner-up at Hack-o-Hire',
      organization: 'Barclays India',
      description: 'Secured 2nd position among 4550+ participants in the prestigious hackathon',
      year: '2023',
      type: 'Competition'
    },
    {
      title: 'Machine Learning Specialization',
      organization: 'Coursera (Stanford University)',
      description: 'Comprehensive certification in ML algorithms and practical applications',
      year: '2023',
      type: 'Certification'
    },
    {
      title: 'IBM Data Science Professional Certificate',
      organization: 'IBM via Coursera',
      description: 'Complete data science methodology and tools certification',
      year: '2023',
      type: 'Certification'
    },
    {
      title: 'Investment Banking Virtual Experience',
      organization: 'Forage (J.P. Morgan)',
      description: 'Practical experience in financial modeling and data analysis',
      year: '2022',
      type: 'Virtual Experience'
    }
  ];

  return (
    <>
      {/* Skills Section */}
      <section id="skills" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="heading-section mb-4">Technical Skills</h2>
            <p className="text-body max-w-2xl mx-auto">
              Comprehensive technical expertise across the full data science and AI development stack, 
              from data collection to deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="card-professional card-hover animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-3">
                    <category.icon className="h-6 w-6 text-primary" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-foreground">
                            {skill.name}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="section-padding bg-gradient-secondary">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="heading-section mb-4">Achievements & Certifications</h2>
            <p className="text-body max-w-2xl mx-auto">
              Recognition for technical excellence and continuous learning in data science, 
              machine learning, and software development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <Card 
                key={index} 
                className="card-professional card-hover animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">
                        {achievement.title}
                      </CardTitle>
                      <p className="text-primary font-medium mt-1">
                        {achievement.organization}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="outline" className="text-xs">
                          {achievement.type}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {achievement.year}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-body">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;