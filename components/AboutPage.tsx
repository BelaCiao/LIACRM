import React from 'react';
import { CheckCircleIcon } from './icons';

const FaqItem = ({ question, answer }: { question: string; answer: string }) => (
    <div className="py-6 border-b border-white/10">
        <dt className="text-lg">
            <button className="text-left w-full flex justify-between items-start text-gray-400">
                <span className="font-medium text-white">{question}</span>
            </button>
        </dt>
        <dd className="mt-2 pr-12">
            <p className="text-base text-gray-300">{answer}</p>
        </dd>
    </div>
);

const AboutPage: React.FC = () => {
    return (
        <div className="animate-fade-in">
            <div className="container mx-auto px-6 py-16 sm:py-24">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl font-bold text-white sm:text-5xl">Inteligência Artificial para um atendimento que encanta.</h1>
                    <p className="mt-4 text-xl text-gray-300">
                        Entenda como a LIA IA eleva o padrão de comunicação da sua clínica, garantindo que nenhum paciente fique sem resposta.
                    </p>
                </div>

                <div className="mt-20 max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-center text-white mb-10">Dúvidas Frequentes</h2>
                    <dl className="space-y-4">
                        <FaqItem
                            question="A LIA IA vai soar como um robô?"
                            answer="Não. A LIA é treinada para ter uma comunicação natural e empática, usando uma linguagem próxima e personalizada para simular um atendimento humano de alta qualidade."
                        />
                        <FaqItem
                            question="E se o paciente tiver uma pergunta muito específica?"
                            answer="A LIA é projetada para lidar com a maioria das perguntas comuns sobre agendamentos, procedimentos e valores. Se uma questão for muito complexa, ela inteligentemente direciona o contato para um atendente humano da sua equipe, garantindo que o paciente nunca fique sem a resposta certa."
                        />
                        <FaqItem
                            question="Meus dados e os dos meus pacientes estão seguros?"
                            answer="Sim. Segurança é nossa prioridade máxima. Usamos criptografia de ponta e seguimos as melhores práticas de segurança de dados para proteger todas as informações, em conformidade com as leis de proteção de dados."
                        />
                        <FaqItem
                            question="A implementação é complicada?"
                            answer="De forma alguma! Nossa equipe cuida de todo o processo de configuração para você. Em pouco tempo, e com mínimo esforço da sua parte, a LIA IA estará pronta para otimizar o atendimento da sua clínica."
                        />
                         <FaqItem
                            question="Como a LIA IA organiza os agendamentos?"
                            answer="A LIA se integra à sua agenda e sugere horários disponíveis diretamente na conversa. Ela realiza o pré-agendamento e envia todas as informações para o seu CRM, evitando conflitos e otimizando o tempo da sua equipe."
                        />
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;