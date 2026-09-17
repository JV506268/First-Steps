export type Level = 'Principiante' | 'Intermedio' | 'Avanzado'
export type ContentType = 'Concepto' | 'Guía' | 'Arquitectura' | 'Proceso' | 'Recurso'

export type LearningCard = {
  id: string
  eyebrow: string
  title: string
  description: string
  level: Level
  type: ContentType
  accent: string
}

export const learningCards: LearningCard[] = [
  { id: 'enterprise-architecture', eyebrow: '01 / FUNDAMENTOS', title: 'Arquitectura Empresarial', description: 'Construye un lenguaje común para el negocio, la tecnología y las decisiones que los conectan.', level: 'Principiante', type: 'Concepto', accent: 'cyan' },
  { id: 'azure-fundamentals', eyebrow: '02 / NUBE', title: 'Fundamentos de Azure', description: 'Comprende la jerarquía, la identidad y los elementos de gobierno de Azure.', level: 'Principiante', type: 'Guía', accent: 'blue' },
  { id: 'landing-zones', eyebrow: '03 / PLATAFORMA', title: 'Azure Landing Zones', description: 'Descubre cómo una base cloud gobernada permite entregar workloads de forma segura.', level: 'Intermedio', type: 'Arquitectura', accent: 'lime' },
  { id: 'architecture-practice', eyebrow: '04 / PRÁCTICA', title: 'Arquitectura en la práctica', description: 'Convierte requisitos, riesgos y trade-offs en decisiones que otros pueden entender.', level: 'Intermedio', type: 'Proceso', accent: 'orange' },
]

export const glossary = [
  ['Tenant', 'Límite dedicado de Microsoft Entra ID para una organización.', 'Identidad'],
  ['Subscription', 'Límite de administración y facturación para recursos de Azure.', 'Azure'],
  ['Management Group', 'Contenedor que organiza subscriptions dentro de una jerarquía de gobierno.', 'Gobierno'],
  ['Landing Zone', 'Base gobernada de Azure donde los workloads pueden desplegarse de forma consistente.', 'Arquitectura'],
  ['Workload', 'Conjunto de recursos de aplicación que entrega una capacidad de negocio.', 'Arquitectura'],
  ['RBAC', 'El control de acceso basado en roles asigna permisos a usuarios, grupos y workloads.', 'Seguridad'],
  ['Azure Policy', 'Servicio que evalúa y aplica reglas organizacionales sobre los recursos.', 'Gobierno'],
  ['VNet', 'Red virtual aislada que permite conectividad privada en Azure.', 'Redes'],
  ['IaC', 'Infrastructure as Code describe infraestructura en archivos versionados y repetibles.', 'Automatización'],
  ['ADR', 'Registro breve de una decisión arquitectónica importante y sus trade-offs.', 'Práctica'],
  ['RTO / RPO', 'Recovery Time Objective y Recovery Point Objective definen objetivos de resiliencia.', 'Resiliencia'],
  ['Availability Zone', 'Ubicación físicamente separada dentro de una región de Azure.', 'Azure'],
  ['Well-Architected Framework', 'Guía de Microsoft para crear workloads confiables, seguros y eficientes.', 'Arquitectura'],
]

export const paths = [
  { number: '01', title: 'Primer día', level: 'Principiante', description: 'Orientación, vocabulario y las personas que rodean a arquitectura.', modules: 'Fundamentos de EA → Leer un diagrama de arquitectura' },
  { number: '02', title: 'Fundamentos cloud', level: 'Principiante', description: 'Jerarquía, identidad, redes y gobierno básicos de Azure.', modules: 'Jerarquía de Azure → Identidad → Policy → Observabilidad' },
  { number: '03', title: 'Explorador de Landing Zones', level: 'Intermedio', description: 'Conecta las capacidades de plataforma con la entrega de workloads.', modules: 'Diseño de plataforma → Redes → Seguridad → Costos' },
  { number: '04', title: 'Práctica de arquitectura', level: 'Intermedio', description: 'Practica cómo documentar, revisar y comunicar decisiones.', modules: 'Requisitos → ADR → Riesgos → Revisiones' },
  { number: '05', title: 'Profundización', level: 'Avanzado', description: 'Explora redes, automatización y patrones de resiliencia avanzados.', modules: 'IaC → Resiliencia → Operaciones → Evolución' },
]

export const resources = [
  ['Azure Architecture Center', 'Arquitecturas de referencia y guía para diseñar soluciones cloud.', 'https://learn.microsoft.com/azure/architecture/'],
  ['Documentación de Azure Landing Zones', 'Guía de Microsoft para diseñar una base cloud escalable.', 'https://learn.microsoft.com/azure/cloud-adoption-framework/ready/landing-zone/'],
  ['Azure Well-Architected Framework', 'Marco para evaluar la calidad de un workload en cinco pilares.', 'https://learn.microsoft.com/azure/well-architected/'],
  ['Microsoft Learn: fundamentos de Azure', 'Rutas autodirigidas para aprender los conceptos principales de Azure.', 'https://learn.microsoft.com/training/azure/'],
  ['Documentación de GitHub Pages', 'Guía oficial para publicar sitios estáticos desde GitHub.', 'https://docs.github.com/pages'],
]
