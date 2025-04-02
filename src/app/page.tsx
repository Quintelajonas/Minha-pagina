import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { FaEnvelope, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';

const frontendTechnologies = [
  { name: "JavaScript", icon: "/icons/javascript.png" },
  { name: "TypeScript", icon: "/icons/typescript.png" },
  { name: "React", icon: "/icons/react.png" },
  { name: "HTML", icon: "/icons/html.png" },
  { name: "CSS", icon: "/icons/css.png" },
 
];

const backendTechnologies = [
  { name: "Node.js", icon: "/icons/nodejs.png" },
  { name: "Prisma ORM", icon: "/icons/prisma.png" },
];

const databaseTechnologies = [
  { name: "PostgreSQL", icon: "/icons/postgresql.png" },
  { name: "SQL Server", icon: "/icons/sql-server.png" },
];

const biTechnologies = [
  { name: "Power BI", icon: "/icons/power-bi.png" },
];


const tolls = [
  {name: "git", icon: "/icons/git.png"},
  {name: "gitHub", icon: "/icons/github.png"},
  {name: "VsCode", icon: "/icons/vsCode.png"},
  ]

export default function Home() {
  return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
          <Card className="max-w-5xl w-full shadow-xl rounded-2xl p-6 text-center bg-white">
              <div className="flex flex-col items-center">
                  <Image
                      src="/images/profile.png"
                      alt="Perfil"
                      width={150}
                      height={150}
                      className="rounded-full shadow-lg border-4 border-gray-300"
                  />
                  <h1 className="text-2xl font-bold mt-4">Jonas Quintela</h1>
                  <p className="text-gray-600">Analista de BI | Desenvolvedor Full Stack</p>
              </div>
              <CardContent className="mt-4 flex flex-col items-center justify-center" >
                  <h2 className="text-lg font-semibold mb-2">Skills:</h2>
                  <Category title="Frontend" technologies={frontendTechnologies} />
                  <Category title="Backend" technologies={backendTechnologies} />
                  <Category title="Banco de Dados" technologies={databaseTechnologies} />
                  <Category title="Business Intelligence" technologies={biTechnologies} />
                  <Category title="Tools" technologies={tolls} />

              </CardContent>
              <div className="mt-6 flex justify-center space-x-4">
                  <a href="https://www.linkedin.com/in/jonas-quintela-97a459252/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                      <FaLinkedin size={30} />
                  </a>
                  <a href="https://wa.me/82981125843" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800">
                      <FaWhatsapp size={30} />
                  </a>
                  <a href="mailto:jonasquintela.s@gmail.com" className="text-gray-600 hover:text-gray-800">
                            <FaEnvelope size={30} />
                  </a>

                  <a href="https://github.com/Quintelajonas" className="text-black-600 hover:text-black-800">
                            <BsGithub size={30} />
                  </a>
              </div>
              <p className="text-gray-600">jonasquintela.s@gmail.com</p>

              <div>

              </div>
          </Card>
      </div>
  );
}

function Category({ title, technologies }: { title: string; technologies: { name: string; icon: string }[] }) {
  return (
      <div className="w-full max-w-4xl text-center mb-6 border border-gray-100 hover:shadow-1xl hover:border-gray-300 transition duration-300">
          <h4 className=" font-semibold mb-4">{title}</h4>
          <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech) => (
                 <div key={tech.name} className="flex flex-col items-center bg-white p-4 shadow-lg rounded-xl mb-6">
                        <Image src={tech.icon} alt={tech.name} width={50} height={50} className="mb-2" />
                        <span className="text-sm font-medium">{tech.name}</span>
                    </div>
              ))}
          </div>
      </div>
  );
}
