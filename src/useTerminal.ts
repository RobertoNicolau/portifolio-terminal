import { useState, useCallback } from 'react';
import type { CommandOutput } from './types';
import { experiences, education, projects, contact, asciiArt } from './data';

export const useTerminal = () => {
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'welcome',
      output: generateWelcomeMessage(),
      timestamp: new Date()
    }
  ]);
  
  const [currentInput, setCurrentInput] = useState('');

  const executeCommand = useCallback((command: string) => {
    const trimmedCommand = command.trim().toLowerCase();
    const output = processCommand(trimmedCommand);
    
    const newEntry: CommandOutput = {
      command: trimmedCommand,
      output,
      timestamp: new Date()
    };

    setHistory(prev => [...prev, newEntry]);
    setCurrentInput('');
  }, []);

  const clearTerminal = useCallback(() => {
    setHistory([]);
  }, []);

  return {
    history,
    currentInput,
    setCurrentInput,
    executeCommand,
    clearTerminal
  };
};

function generateWelcomeMessage(): string {
  return `${asciiArt}

Bem-vindo ao meu portfólio interativo!

Digite um dos comandos abaixo para navegar:

EXPERIENCIA  - Experiência profissional (exp)
EDUCACAO     - Educação e formação (formacao)
PROJETOS     - Projetos realizados (portfolio)
CONTATO      - Informações de contato (email)
HABILIDADES  - Habilidades técnicas (skills)
IDIOMAS      - Idiomas (lang)
CURRICULO    - Baixar currículo PDF (cv)
LIMPAR       - Limpar terminal (clear)
AJUDA        - Mostrar comandos disponíveis (help)

Desenvolvido com React + TypeScript + Vite`;
}

function processCommand(command: string): string {
  switch (command) {
    case 'experiencia':
    case 'exp':
      return formatExperiences();
    
    case 'educacao':
    case 'formacao':
      return formatEducation();
    
    case 'projetos':
    case 'portfolio':
      return formatProjects();
    
    case 'contato':
    case 'email':
      return formatContact();
    
    case 'habilidades':
    case 'skills':
      return formatSkills();
    
    case 'idiomas':
    case 'lang':
      return formatLanguages();
    
    case 'curriculo':
    case 'cv':
      downloadCV();
      return formatCVDownload();
    
    case 'limpar':
    case 'clear':
      return '';
    
    case 'ajuda':
    case 'help':
      return `
Comandos disponíveis:

EXPERIENCIA    - Mostra experiência profissional (atalho: exp)
EDUCACAO       - Mostra educação e certificações (atalho: formacao)
PROJETOS       - Lista projetos desenvolvidos (atalho: portfolio)
CONTATO        - Exibe informações de contato (atalho: email)
HABILIDADES    - Lista habilidades técnicas (atalho: skills)
IDIOMAS        - Mostra idiomas (atalho: lang)
CURRICULO      - Baixa currículo em PDF (atalho: cv)
LIMPAR         - Limpa o terminal (atalho: clear)
AJUDA          - Mostra esta ajuda (atalho: help)

💡 Dica: Você pode usar tanto o comando completo quanto o atalho!
`;

    case '':
      return '';
    
    default:
      return `Comando '${command}' não encontrado. Digite 'ajuda' para ver os comandos disponíveis.`;
  }
}

function formatExperiences(): string {
  let output = `
===============================================================
                    EXPERIENCIA PROFISSIONAL
===============================================================

`;

  experiences.forEach((exp, index) => {
    output += `
${index + 1}. ${exp.position} @ ${exp.company}
   Periodo: ${exp.period}
   
   Responsabilidades:
`;
    exp.description.forEach(desc => {
      output += `      - ${desc}\n`;
    });
    
    output += `
   Tecnologias: ${exp.technologies.join(' | ')}
`;
    
    if (index < experiences.length - 1) {
      output += '\n---------------------------------------------------------------\n';
    }
  });

  return output;
}

function formatEducation(): string {
  let output = `
===============================================================
                       EDUCACAO E FORMACAO
===============================================================

`;

  education.forEach((edu, index) => {
    output += `
${index + 1}. ${edu.degree}
   Instituicao: ${edu.institution}
   Periodo: ${edu.period}
`;
    
    if (edu.description) {
      output += `   Descricao: ${edu.description}\n`;
    }
    
    if (index < education.length - 1) {
      output += '\n---------------------------------------------------------------\n';
    }
  });

  return output;
}

function formatProjects(): string {
  let output = `
===============================================================
                        PROJETOS REALIZADOS
===============================================================

`;

  projects.forEach((project, index) => {
    output += `
${index + 1}. ${project.name}
   Descricao: ${project.description}
   Tecnologias: ${project.technologies.join(' | ')}
`;
    
    if (project.link) {
      output += `   Demo: ${project.link}\n`;
    }
    
    if (project.github) {
      output += `   GitHub: ${project.github}\n`;
    }
    
    if (index < projects.length - 1) {
      output += '\n---------------------------------------------------------------\n';
    }
  });

  return output;
}

function formatContact(): string {
  return `
===============================================================
                        INFORMACOES DE CONTATO
===============================================================

Email: ${contact.email}
${contact.phone ? `Telefone: ${contact.phone}` : ''}
LinkedIn: ${contact.linkedin}
GitHub: ${contact.github}
Localizacao: ${contact.location}

Estou sempre aberto a novas oportunidades e colaboracoes!
Sinta-se a vontade para entrar em contato.
`;
}

function formatSkills(): string {
  return `
===============================================================
                        HABILIDADES TECNICAS
===============================================================

Linguagens de Programacao:
   TypeScript | JavaScript | Python | PHP 8 | Node.js

Frontend:
   React JS | Next JS | React Native | Expo
   HTML5 | CSS3 | Tailwind CSS | CSS Modules
   Styled Components | Material UI | RadixUI | HeadlessUI

Backend & Ferramentas:
   Laravel | Laravel HERD | Fastify | Express | Prisma ORM
   API Rest/SOLID | Zod | Axios | Docker | FFMPeg

IA & Automacao:
   OpenAI API | IA (Inteligencia Artificial)
   docxtemplater | Processamento de Audio/Video

Bancos de Dados & Ferramentas:
   PostgreSQL | MySQL | SQL Server | Oracle Database
   Firebird | MongoDB | HeidSQL | PHPmyAdmin

DevOps & Ferramentas de Desenvolvimento:
   Git/GitHub | GitLab | Docker | CI/CD
   Google Cloud Platform | CloudFlare | Vercel
   DataGrip | SqlYog | SSMS | Pentaho Data Integration
   Laradumps | Chrome Dev Tools

Metodologias:
   SCRUM | Desenvolvimento Agil
   Code Review | Pull Requests

Ferramentas de Teste:
   Insomnia | Chrome Dev Tools | Event Viewer
`;
}

function formatLanguages(): string {
  return `
===============================================================
                           IDIOMAS
===============================================================

Ingles - Intermediario
   Leitura de documentacoes tecnicas e artigos
   Compreensao de videos e tutoriais
   Comunicacao tecnica escrita

Espanhol - Basico
   Leitura de textos simples
   1 ano de estudo na grade curricular da faculdade

Portugues - Nativo
   Comunicacao fluente oral e escrita
   Documentacao tecnica
`;
}

function downloadCV(): void {
  const link = document.createElement('a');
  link.href = '/Roberto_Nicolau_CV.pdf';
  link.download = 'Roberto_Nicolau_CV.pdf';
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function formatCVDownload(): string {
  return `
===============================================================
                        DOWNLOAD CURRICULO
===============================================================

Iniciando download do curriculo em PDF...

Arquivo: Roberto_Nicolau_CV.pdf
Conteudo: Curriculo completo e atualizado
Ultima atualizacao: Outubro 2025

O download foi iniciado automaticamente!
Se nao iniciou, verifique as configuracoes do seu navegador.

Dica: O arquivo contem todas as informacoes detalhadas sobre:
   - Experiencia profissional completa
   - Formacao academica e certificacoes  
   - Habilidades tecnicas
   - Informacoes de contato
   - Projetos realizados
`;
}