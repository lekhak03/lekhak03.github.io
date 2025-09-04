import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { RadarChart } from '../components/RadarChart';
import { 
  BarChart3, 
  TrendingUp, 
  PieChart, 
  Activity,
  Database,
  Brain,
  FileSpreadsheet,
  Code2,
  ExternalLink,
  Github,
  Eye,
  Download,
  Sparkles,
  BookOpen,
  Lightbulb,
  User,
  BarChart,
  Target,
  Map,
  Globe,
  LineChart,
  Circle,
} from 'lucide-react';


export const Analytics: React.FC = () => {
  const projects = [
{
  title: 'Employee Churn Prediction',
  description: 'Built a high-accuracy machine learning system to predict employee attrition. Leveraged feature engineering and model interpretation to uncover churn drivers, enabling HR teams to take proactive action.',
  story: 'What began as a churn model evolved into a data pipeline and dashboarding system that revealed the human factors behind employee retention.',
  tech: ['Python', 'PyCaret', 'BigQuery', 'Looker Studio'],
  type: 'HR Analytics',
  icon: User,
  image: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800',
  notebook: 'https://github.com/lekhak03/churn-model/blob/main/Pilot_Analysis_Employee_Churn.ipynb',
  github: 'https://github.com/lekhak03/churn-model',
  metrics: { accuracy: '98.8%', auc: '0.99', records: '15K+' },
  color: 'from-emerald-500 to-teal-500'
},

    {
  title: 'HR Analytics Dashboard',
  description: 'Designed an interactive Power BI dashboard to uncover absenteeism patterns across employees, categories, and seasons. Delivered actionable insights for HR to improve workload balance, wellness programs, and policy planning.',
  story: 'What started as a data visualization exercise became a comprehensive HR intelligence tool, revealing hidden trends in employee health and attendance.',
  tech: ['Power BI', 'Data Visualization', 'HR Analytics'],
  type: 'Workforce Insights',
  icon: BarChart,
  image: 'https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=800',
  notebook: null,
  github: 'https://github.com/lekhak03/powerBI-project/blob/main/workingHRProject.pdf',
  metrics: { cases: '740', hours: '5,124', topCategory: '765 hrs (Category 3)' },
  color: 'from-indigo-500 to-blue-500'
},

    {
  title: 'Pundit StatBook',
  description: 'Developed a football analytics dashboard with role-based insights for Defenders, Midfielders, Forwards, and Goalkeepers. Integrated interactive radar charts to visualize player and system performance with precision.',
  story: 'What began as a simple stats viewer turned into a dynamic analytics platform, blending football intelligence with sleek data visualization.',
  tech: ['Next.js', 'TypeScript', 'D3.js', 'React'],
  type: 'Sports Analytics',
  icon: Circle,
  image: 'https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg?auto=compress&cs=tinysrgb&w=800',
  notebook: null,
  github: 'https://github.com/lekhak03/pundit-statbook',
  linkLabel: 'https://pundit-statbook.vercel.app/',
  metrics: { roles: '4', charts: '2+', performance: 'Real-time SSR' },
  color: 'from-yellow-500 to-orange-500'
},

{
  title: 'Interactive Mapping with Folium',
  description: 'Created dynamic geospatial visualizations using Folium, clustering locations, customizing markers, and integrating geographic calculations to explore spatial patterns.',
  story: 'What began as a simple mapping exercise expanded into an exploration of how interactive geospatial tools can reveal hidden patterns in data.',
  tech: ['Python', 'Folium', 'Pandas', 'MarkerCluster'],
  type: 'Geospatial Analytics',
  icon: Map,
  image: 'https://images.pexels.com/photos/408503/pexels-photo-408503.jpeg?auto=compress&cs=tinysrgb&w=800',
  notebook: 'https://github.com/lekhak03/ibm-ds-certification/blob/main/folium_lab.ipynb',
  metrics: { maps: '5+', clusters: 'Marker-based', features: 'Custom popups' },
  color: 'from-green-500 to-emerald-500'
},

{
  title: 'Comparing Classification Models',
  description: 'Evaluated multiple classification algorithms—Logistic Regression, KNN, SVM, and Decision Trees—on a real dataset, comparing accuracy, precision, recall, and F1-scores.',
  story: 'A simple classification task grew into a comprehensive benchmark of machine learning algorithms, providing insight into trade-offs across models.',
  tech: ['Python', 'Scikit-learn', 'Pandas', 'Seaborn', 'Matplotlib'],
  type: 'Machine Learning',
  icon: LineChart,
  image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
  notebook: 'https://github.com/lekhak03/ibm-ds-certification/blob/main/machine_learning_models.ipynb',
  metrics: { models: '5+', best: 'SVM/Random Forest', metrics: 'Accuracy, F1, AUC' },
  color: 'from-purple-500 to-pink-500'
},

{
  title: 'Data Visualization Showcase',
  description: 'Produced compelling plots using Matplotlib, Seaborn, and Folium to highlight relationships, distributions, and geospatial insights from datasets.',
  story: 'What started as practice with charting libraries became a storytelling exercise, translating raw numbers into intuitive visual narratives.',
  tech: ['Python', 'Matplotlib', 'Seaborn', 'Folium'],
  type: 'Data Visualization',
  icon: BarChart,
  image: 'https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=800',
  notebook: 'https://github.com/lekhak03/ibm-ds-certification/blob/main/visualizations.ipynb',
  metrics: { plots: '10+', libraries: '3', insights: 'Multi-domain' },
  color: 'from-cyan-500 to-sky-500'
},
  ];

  const skills = {
    'Machine Learning': ['Scikit-learn', 'TensorFlow', 'PyTorch', 'PyCaret', 'Hugging Face'],
    'Data Visualization': ['D3.js', 'Plotly', 'Matplotlib', 'Seaborn', 'Tableau'],
    'Data Processing': ['Pandas', 'NumPy', 'Apache Spark', 'Dask', 'Polars'],
    'Databases': ['PostgreSQL', 'MongoDB', 'InfluxDB', 'Redis', 'BigQuery'],
    // 'Cloud & DevOps': ['AWS', 'Docker', 'Kubernetes', 'Apache Kafka', 'Airflow']
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-8"
            >
              <Sparkles className="w-10 h-10 text-white" />
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Data Stories
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Where numbers meet narratives. I transform complex datasets into compelling stories 
              that drive decisions, reveal insights, and spark innovation.
            </p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex justify-center items-center mt-8 space-x-2 text-gray-600"
            >
              <BookOpen className="w-5 h-5" />
              <span className="text-lg">"Numbers have an important story to tell. They rely on you to give them a clear and convincing voice"</span>
              <span className="text-lg"> - Stephen Few</span>

            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-6">
              <Code2 className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Tools Arsenal
            </h2>
            <p className="text-gray-600 text-lg">The tools that bring data stories to life</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                  <div className="flex items-center mb-4">
                    <div className={`w-3 h-3 rounded-full mr-3 ${
                      index === 0 ? 'bg-pink-500' :
                      index === 1 ? 'bg-blue-500' :
                      index === 2 ? 'bg-emerald-500' :
                      index === 3 ? 'bg-purple-500' : 'bg-orange-500'
                    }`}></div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {category}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {skillList.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                      >
                        <div className={`w-2 h-2 rounded-full mr-3 ${
                          index === 0 ? 'bg-pink-400' :
                          index === 1 ? 'bg-blue-400' :
                          index === 2 ? 'bg-emerald-400' :
                          index === 3 ? 'bg-purple-400' : 'bg-orange-400'
                        }`}></div>
                        <span className="text-gray-700 font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-6">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              My Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The following is my attempt at finding insights on data.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 gap-10"
          >
            {projects.map((project, index) => (
              <motion.div key={project.title} variants={itemVariants}>
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group">
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-80`} />
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-800 font-semibold text-sm">
                        {project.type}
                      </span>
                    </div>
                    <div className="absolute bottom-6 right-6">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <project.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Story Element */}
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-4 mb-6 border-l-4 border-blue-400">
                      <div className="flex items-center mb-2">
                        <Lightbulb className="w-4 h-4 text-blue-500 mr-2" />
                        <span className="text-sm font-semibold text-blue-700">The Story</span>
                      </div>
                      <p className="text-gray-700 text-sm italic">
                        {project.story}
                      </p>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center p-3 bg-gray-50 rounded-xl">
                          <div className="text-2xl font-bold text-gray-800">{value}</div>
                          <div className="text-gray-500 text-xs uppercase tracking-wide font-medium">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
{project.linkLabel && (
  <motion.a
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    href={project.linkLabel}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition-colors font-medium"
  >
    <Globe className="w-4 h-4" />
    <span>Live Site</span>
  </motion.a>
)}

{project.github && (
  <motion.a
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-xl hover:bg-gray-700 transition-colors font-medium"
  >
    <Github className="w-4 h-4" />
    <span>Code</span>
  </motion.a>
)}


                      

                      {project.notebook && (
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.notebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all font-medium"
                        >
                          <FileSpreadsheet className="w-4 h-4" />
                          <span>Notebook</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
};