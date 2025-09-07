import { Building2, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: 'AI & CloudOps Intern',
      company: 'Airtel',
      location: 'India',
      period: '2023',
      description: [
        'Developed and deployed Docker-based containerization solutions for scalable AI applications',
        'Implemented LLM automation workflows for customer service optimization',
        'Worked extensively with Oracle Database Administration for data pipeline management',
        'Collaborated with cross-functional teams to integrate AI solutions into existing CloudOps infrastructure'
      ],
      skills: ['Docker', 'LLM Automation', 'Oracle DBA', 'Cloud Computing', 'Python', 'AI/ML']
    },
    {
      title: 'Microsoft Power Platform Intern',
      company: 'PowerZoom',
      location: 'Remote',
      period: '2023',
      description: [
        'Built AI-powered models using Microsoft Power Platform for business process automation',
        'Developed low-code solutions for data analysis and visualization using Power BI',
        'Created automated workflows using Power Automate for improved business efficiency',
        'Integrated machine learning models with Power Apps for intelligent decision-making systems'
      ],
      skills: ['Microsoft Power Platform', 'Power BI', 'Power Automate', 'Low-Code Development', 'AI Models', 'Business Intelligence']
    }
  ];

  const education = [
    {
      degree: 'Master of Science in Data Science',
      institution: 'Stony Brook University',
      location: 'New York, USA',
      period: '2024 - Present',
      description: 'Specializing in advanced machine learning, artificial intelligence, and statistical analysis with focus on practical applications in real-world scenarios.',
      highlights: ['Advanced ML Algorithms', 'Statistical Analysis', 'AI Research', 'Data Mining']
    },
    {
      degree: 'Bachelor of Technology in AI & Data Science',
      institution: 'Vishwakarma Institute of Technology',
      location: 'Pune, India',
      period: '2021 - 2025',
      description: 'Comprehensive program covering artificial intelligence, machine learning, data structures, algorithms, and software development with hands-on project experience.',
      highlights: ['AI/ML Fundamentals', 'Data Structures', 'Software Development', 'Research Projects']
    }
  ];

  return (
    <>
      {/* Experience Section */}
      <section id="experience" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="heading-section mb-4">Professional Experience</h2>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className="card-professional card-hover animate-slide-in-left"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl flex items-center gap-2">
                        <Building2 className="h-5 w-5 text-primary" />
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="text-lg font-medium text-primary mt-1">
                        {exp.company}
                      </CardDescription>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-body flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-padding bg-gradient-secondary">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="heading-section mb-4">Education</h2>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card 
                key={index} 
                className="card-professional card-hover animate-slide-in-left"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-primary">
                        {edu.degree}
                      </CardTitle>
                      <CardDescription className="text-lg font-medium text-foreground mt-1">
                        {edu.institution}
                      </CardDescription>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {edu.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {edu.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-body mb-4">{edu.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight, highlightIndex) => (
                      <Badge 
                        key={highlightIndex} 
                        variant="outline" 
                        className="text-xs"
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;