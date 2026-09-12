import { useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  CircleArrowOutUpRight,
  Code2,
  ExternalLink,
  Globe2,
  Layers3,
  Menu,
  MonitorSmartphone,
  X,
} from 'lucide-react'
import './styles.css'

type Project = {
  id: string
  title: string
  label: string
  description: string
  detail: string
  tech: string[]
  category: 'Work' | 'Personal'
  url: string
  accent: string
}

const projects: Project[] = [
  {
    id: 'portfolio',
    title: 'Portfolio / Interactive Skill Profile',
    label: 'PERSONAL PROJECT',
    description: 'スキルと実績を、選考担当者が短時間で把握できるインタラクティブなプロフィール。',
    detail: 'Reactの状態管理を使い、技術・カテゴリに応じたフィルタリングと詳細表示を実装。Cloudflare Workers Static Assetsで配信しています。',
    tech: ['React', 'TypeScript', 'Vite', 'Cloudflare Workers'],
    category: 'Personal',
    url: 'https://github.com/testestestes2211-arch/hiro-takahashi-portfolio',
    accent: 'violet',
  },
  {
    id: 'hive',
    title: 'Hive Tech',
    label: 'CLIENT WORK',
    description: '技術会社の信頼感を伝える、構成設計から公開までの企業サイト。',
    detail: '情報設計、レスポンシブな画面構築、公開後の更新と顧客調整まで一貫して担当しました。',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    category: 'Work',
    url: 'https://www.hivetech.co.jp/',
    accent: 'orange',
  },
  {
    id: 'sho',
    title: '書の教室',
    label: 'CLIENT WORK',
    description: '教室の空気感と、初めての方にも届く導線を両立したサービスサイト。',
    detail: 'サイト構成、デザイン、実装、修正、公開を担当。更新しやすい運用設計も意識しています。',
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'Work',
    url: 'https://www.sho-no-kyoshitsu.jp/',
    accent: 'blue',
  },
  {
    id: 'fukaen',
    title: '風香園',
    label: 'CLIENT WORK',
    description: '地域に根ざした店舗の魅力を、写真と読みやすい情報整理で紹介。',
    detail: '顧客とのヒアリングからページ構成、制作、更新、公開までを担当しました。',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    category: 'Work',
    url: 'https://www.fu-kaen.com/',
    accent: 'green',
  },
]

const experience = [
  { period: '2016.04 — 2019.07', org: '株式会社センターグローブ', role: 'Web制作・SEO', body: 'HTML / CSS / JavaScript / PHPを用いたサイト構築、修正、機能調整、更新、保守運用。案件の進行管理や顧客調整まで、制作の前後を含めて担当しました。' },
  { period: '2024.09 — 現在', org: 'フリーランス', role: 'Web Developer', body: '企業・店舗サイトの構成、デザイン、構築、修正、更新、公開、顧客調整。既存の実務経験をReactによるWebアプリケーション開発へ拡張しています。' },
]

const stack = [
  { name: 'JavaScript', group: 'Professional Experience', level: '実務経験' },
  { name: 'PHP', group: 'Professional Experience', level: '実務経験' },
  { name: 'HTML / CSS', group: 'Professional Experience', level: '実務経験' },
  { name: 'React', group: 'Currently Expanding', level: '実務経験を基盤に拡張中' },
  { name: 'TypeScript', group: 'Currently Expanding', level: 'React開発で活用' },
  { name: 'Git / GitHub', group: 'Working Tools', level: '日常的に使用' },
  { name: 'Cloudflare Workers', group: 'Working Tools', level: 'デプロイ・運用' },
  { name: 'Figma', group: 'Working Tools', level: '設計・共有' },
]

function App() {
  const [projectFilter, setProjectFilter] = useState<'All' | 'Work' | 'Personal'>('All')
  const [techFilter, setTechFilter] = useState('All')
  const [selected, setSelected] = useState<Project | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  const techOptions = ['All', 'React', 'JavaScript', 'PHP', 'TypeScript']
  const visibleProjects = useMemo(() => projects.filter((project) => {
    const categoryMatch = projectFilter === 'All' || project.category === projectFilter
    const techMatch = techFilter === 'All' || project.tech.includes(techFilter)
    return categoryMatch && techMatch
  }), [projectFilter, techFilter])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <div className="app-shell">
      <header className="site-header">
        <button className="brand" onClick={() => scrollTo('top')} aria-label="トップへ戻る">
          <span className="brand-mark">HT</span>
          <span>HIROTAKAHASHI<span className="brand-dot">.</span></span>
        </button>
        <button className="menu-button" onClick={() => setMenuOpen((open) => !open)} aria-label="メニューを開く">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'}>
          <button onClick={() => scrollTo('about')}>About</button>
          <button onClick={() => scrollTo('experience')}>Experience</button>
          <button onClick={() => scrollTo('projects')}>Projects</button>
          <button className="nav-contact" onClick={() => scrollTo('contact')}>Contact <ArrowUpRight size={15} /></button>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy">
            <p className="eyebrow">WEB DEVELOPER / FRONTEND DEVELOPER</p>
            <h1>考えて、整えて、<br /><em>きちんと届く</em> UIを。</h1>
            <p className="hero-lead">JavaScript・PHPを使用したWeb制作・開発の実務経験をベースに、現在はReactを使用したWebアプリケーション開発にも領域を広げている。</p>
            <div className="hero-actions"><button className="primary-button" onClick={() => scrollTo('projects')}>View selected work <ArrowDownRight size={17} /></button><button className="text-button" onClick={() => scrollTo('about')}>More about me <ChevronRight size={16} /></button></div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="orb orb-one" /><div className="orb orb-two" />
            <div className="code-card"><div className="code-top"><span className="window-dots"><i /><i /><i /></span><span>profile.tsx</span><Code2 size={14} /></div><div className="code-body"><span className="code-muted">01</span><span><b className="pink">const</b> profile <b className="pink">=</b> {'{'}</span><span className="indent"><b className="cyan">name</b>: <b className="yellow">'KODAI TAKAHASHI'</b>,</span><span className="indent"><b className="cyan">focus</b>: <b className="yellow">'React UI'</b>,</span><span className="indent"><b className="cyan">status</b>: <b className="yellow">'building'</b></span><span>{'}'}</span><span className="code-cursor">▌</span></div></div>
            <div className="hero-tag tag-a"><span>01</span> Thoughtful by default</div><div className="hero-tag tag-b"><span>02</span> Built for people</div>
          </div>
        </section>

        <section id="about" className="about section-pad section-grid"><div className="section-label"><span>01</span><span>About</span></div><div className="about-content"><h2>Web制作の現場感覚を、<br /><span>Reactの設計力へ。</span></h2><p className="large-copy">見た目を整えるだけでなく、情報の優先度や更新のしやすさまで考えたWebサイトを作ってきました。制作会社での経験とフリーランスでの顧客対応を活かし、実装の意図を言葉にしながらチームで前へ進めます。</p><div className="fact-row"><div><strong>8<span>+</span></strong><small>years around<br />web production</small></div><div><strong>3</strong><small>live sites<br />in selected work</small></div><div><strong>∞</strong><small>curiosity for<br />better interfaces</small></div></div></div></section>

        <section id="experience" className="experience section-pad section-grid"><div className="section-label"><span>02</span><span>Experience</span></div><div><div className="section-heading-row"><h2>経験を、次の<br /><span>実装の解像度</span>へ。</h2><BriefcaseBusiness size={34} strokeWidth={1.2} /></div><div className="experience-list">{experience.map((item) => <article className="experience-item" key={item.org}><div className="period">{item.period}</div><div><h3>{item.org}</h3><p className="role">{item.role}</p><p>{item.body}</p></div></article>)}</div></div></section>

        <section className="stack-section section-pad"><div className="stack-intro"><p className="eyebrow">A PRACTICAL STACK</p><h2>できることと、<br /><span>伸ばしていること。</span></h2><p>星の数ではなく、どの現場でどう使ってきたか。役割と現在地が伝わるように整理しています。</p></div><div className="stack-grid">{stack.map((item, index) => <div className="stack-item" key={item.name}><div className="stack-number">0{index + 1}</div><div><h3>{item.name}</h3><p>{item.group}</p></div><span className="stack-level">{item.level}</span></div>)}</div></section>

        <section id="projects" className="projects section-pad"><div className="projects-head"><div><p className="eyebrow">SELECTED WORK</p><h2>つくったもの、<br /><span>つくっているもの。</span></h2></div><p className="projects-note">実務で培った構成力と、Reactで広げているUI実装。<br />切り替えながらご覧いただけます。</p></div><div className="filter-panel"><div className="filter-block"><span>PROJECT TYPE</span><div className="pills">{(['All', 'Work', 'Personal'] as const).map((filter) => <button className={projectFilter === filter ? 'pill active' : 'pill'} key={filter} onClick={() => setProjectFilter(filter)}>{filter}</button>)}</div></div><div className="filter-block"><span>TECHNOLOGY</span><div className="pills">{techOptions.map((filter) => <button className={techFilter === filter ? 'pill active' : 'pill'} key={filter} onClick={() => setTechFilter(filter)}>{filter}</button>)}</div></div></div><div className="project-grid">{visibleProjects.map((project) => <article className={`project-card accent-${project.accent}`} key={project.id} onClick={() => setSelected(project)} tabIndex={0} onKeyDown={(event) => event.key === 'Enter' && setSelected(project)}><div className="project-top"><span className="project-label">{project.label}</span><CircleArrowOutUpRight size={21} /></div><div className="project-art"><span className="art-word">{project.id === 'portfolio' ? 'HT' : project.title.slice(0, 2)}</span><span className="art-grid" /></div><h3>{project.title}</h3><p>{project.description}</p><div className="tech-list">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div><button className="card-link" onClick={(event) => { event.stopPropagation(); setSelected(project) }}>View case <ArrowUpRight size={16} /></button></article>)}</div>{visibleProjects.length === 0 && <div className="empty-state"><Layers3 size={22} />条件に一致するプロジェクトはありません。</div>}</section>

        <section className="approach section-pad"><div className="section-label"><span>04</span><span>Approach</span></div><div className="approach-content"><div className="approach-heading"><h2>丁寧さは、<br /><span>速度を止めない。</span></h2><MonitorSmartphone size={34} strokeWidth={1.2} /></div><div className="approach-points"><div><span>01</span><h3>目的から逆算する</h3><p>誰に何を伝え、どんな行動につなげるかを整理してから、必要なUIを設計します。</p></div><div><span>02</span><h3>変化に強くつくる</h3><p>データとコンポーネントを分け、追加・修正しやすい構造を最初から意識します。</p></div><div><span>03</span><h3>最後まで確かめる</h3><p>PCとスマホ、リンク、表示速度。公開前後の確認までを制作の一部と考えています。</p></div></div></div></section>

        <section id="contact" className="contact section-pad"><div><p className="eyebrow">LET'S TALK</p><h2>一緒に、いい仕事を<br /><span>つくりませんか。</span></h2></div><a className="contact-link" href="mailto:hello@example.com">hello@example.com <ArrowUpRight size={23} /></a></section>
      </main>
      <footer><span>© 2026 Kodai Takahashi</span><span>Designed & built with React</span><div><a href="https://github.com/testestestes2211-arch/hiro-takahashi-portfolio" target="_blank" rel="noreferrer">GitHub <ExternalLink size={13} /></a><button onClick={() => scrollTo('top')}>Back to top ↑</button></div></footer>
      {selected && <div className="modal-backdrop" role="presentation" onClick={() => setSelected(null)}><div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setSelected(null)} aria-label="閉じる"><X size={20} /></button><p className="project-label">{selected.label}</p><h2 id="modal-title">{selected.title}</h2><p>{selected.detail}</p><div className="modal-tech">{selected.tech.map((tech) => <span key={tech}><Check size={13} />{tech}</span>)}</div><a className="primary-button" href={selected.url} target="_blank" rel="noreferrer">Open project <ExternalLink size={16} /></a></div></div>}
    </div>
  )
}

export default App

createRoot(document.getElementById('root')!).render(<App />)
