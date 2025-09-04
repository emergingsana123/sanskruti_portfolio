import { ExternalLink, Github, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'Rakshak – AI Emergency Response Platform',
      description: 'Advanced AI-powered platform for emergency response with voice recognition, real-time processing, and intelligent dispatch systems.',
      tech: ['Voice AI', 'Flask', 'MongoDB', 'Python', 'Machine Learning'],
      github: '#',
      paper: null,
      featured: true
    },
    {
      title: 'Semantic Video Summarizer',
      description: 'NLP-powered video summarization system that extracts key insights and generates meaningful summaries from video content.',
      tech: ['NLP', 'PyTorch', 'Computer Vision', 'Flask', 'MongoDB'],
      github: '#',
      paper: '#',
      featured: true
    },
    {
      title: 'JuryNLP – Legal Document AI Framework',
      description: 'Comprehensive AI framework for legal document analysis using advanced OCR and natural language processing techniques.',
      tech: ['LangChain', 'OCR', 'NLP', 'Document AI', 'Python'],
      github: '#',
      paper: null,
      featured: false
    },
    {
      title: 'CareerBoost – Hybrid RAG-NLP Job Recommender',
      description: 'Intelligent job recommendation system combining retrieval-augmented generation with advanced NLP for personalized career guidance.',
      tech: ['RAG', 'NLP', 'Recommendation Systems', 'LangChain', 'ML'],
      github: '#',
      paper: '#',
      featured: true
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-secondary">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="heading-section mb-4">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`card-professional card-hover group animate-scale-in ${
                project.featured ? 'ring-2 ring-primary/20' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    {project.featured && (
                      <Badge variant="secondary" className="mt-2">
                        Featured
                      </Badge>
                    )}
                  </div>
                </div>
                <CardDescription className="text-body">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="btn-secondary group">
                    <Github className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    GitHub
                  </Button>
                  {project.paper && (
                    <Button size="sm" variant="outline" className="btn-secondary group">
                      <FileText className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                      Paper
                    </Button>
                  )}
                  <Button size="sm" className="btn-primary group">
                    <ExternalLink className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Research Section */}
        <div id="research" className="mt-24 animate-fade-in-up">
          <div className="text-center mb-12">
            <h3 className="heading-section mb-4">Research Publications</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="card-professional card-hover">
              <CardHeader>
                <CardTitle className="text-lg">Semantic Video Summarization using NLP</CardTitle>
                <CardDescription>IEEE Conference Publication</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-body mb-4">
                  Advanced techniques for extracting semantic information from video content 
                  using natural language processing and computer vision.
                </p>
                <Button size="sm" variant="outline" className="btn-secondary">
                  <FileText className="mr-2 h-4 w-4" />
                  Read Paper
                </Button>
              </CardContent>
            </Card>

            <Card className="card-professional card-hover">
              <CardHeader>
                <CardTitle className="text-lg">Hybrid RAG-NLP for Job Recommendations</CardTitle>
                <CardDescription>IEEE Conference Publication</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-body mb-4">
                  Novel approach combining retrieval-augmented generation with NLP 
                  for personalized career recommendation systems.
                </p>
                <Button size="sm" variant="outline" className="btn-secondary">
                  <FileText className="mr-2 h-4 w-4" />
                  Read Paper
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;