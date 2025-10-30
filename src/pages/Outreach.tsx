import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { getAssetPath } from '@/lib/assets';

const Outreach = () => {
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setExpanded(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const outreachData = [
    {
      id: 'aps-dnp-2024',
      title: 'American Physics Society, Division of Nuclear Physics - CEU',
      type: 'presentation',
      subtype: 'conference',
      period: 'Oct 2024',
      venue: 'APS DNP Conference',
      description: 'At the 2024 APS Division of Nuclear Physics Conference, I presented my research on how CAD surface tessellation impacts photon transport simulations in liquid xenon detectors. This work, part of the nEXO collaboration, helps refine optical modeling and improve detector design for future neutrino experiments.',
      fullContent: `In October 2024, I packed my poster tube and nerves and headed to my first-ever scientific conference: the APS Division of Nuclear Physics (DNP) meeting. It was the culmination of a summer spent immersed in the intricacies of detector simulation, and I was both thrilled and terrified to present my work to a room full of nuclear physicists.

My project, developed within the nEXO collaboration, focused on a subtle but critical issue in detector modeling: how surface tessellation in CAD-generated geometries can affect photon transport efficiency in liquid xenon (LXe) detectors. Using Chroma, a GPU-accelerated optical simulation framework, I had spent months running tests, debugging artifacts, and developing strategies to isolate simulation inaccuracies caused by low-resolution mesh geometry, particularly in curved reflectors.

In the poster, I demonstrated:
• How tessellation resolution impacts optical simulation fidelity in LXe environments
• Quantitative results showing efficiency differences between flat and curved surfaces under different mesh configurations
• Best practices for simulation setup using Chroma
• The implications of all of this for detector design and sensitivity in the nEXO experiment

This wasn't just a technical exercise; it was a contribution toward improving the tools we use to simulate and design some of the most sensitive particle detectors ever built.

Presenting at APS DNP was more than just checking a box; it was the moment I first saw myself as part of the scientific community. I fielded questions, got suggestions from senior researchers, and had the incredible experience of explaining my work to people who genuinely cared. It was my first time in a new city solely for science, and I came back not only more confident in my research but more inspired than ever to keep asking questions and chasing answers.

That poster now hangs above my desk: a reminder of how far I've come, and how much more I want to learn.`,
      abstractUrl: '/files/2024 APS-DNP CEU Abstract.pdf',
      posterUrl: '/files/Daksh Bhatt APS-DNP CEU Poster Final Draft.pdf',
      thumbnail: getAssetPath('/lovable-uploads/APS-DNP-presenter-image.png') // added thumbnail
    },
    {
      id: 'phys281-ta',
      title: 'PHYS281 - Computational Physics',
      type: 'teaching',
      period: 'Feb 2025 – May 2025',
      supervisor: 'Dr. Shubha Tewari',
      venue: 'UMass Amherst',
      description: 'Served as a teaching assistant for a 25-student course in Python-based scientific computing. Guided students through debugging, data analysis, and astronomical simulations using NumPy, SciPy, and Matplotlib. Developed supplementary handouts introducing advanced Python techniques and visualization tools. Strengthened my ability to teach computational thinking and communicate complex code intuitively.',
      fullContent: `As the teaching assistant for PHYS 281: Computational Physics, I supported a cohort of 25 students learning how to apply programming to real scientific problems. The course, based on Mark Newman's Computational Physics, introduced Python as a tool for modeling, data analysis, and numerical computation — skills essential for modern research in both physics and astronomy.

To complement the textbook, I developed a series of custom handouts tailored to my section, covering topics such as 3D plotting and animations in Matplotlib, least-squares model fitting, numerical integration with SciPy, Fourier analysis, random number distributions, and introductory object-oriented Python. These resources helped students bridge the gap between theory and implementation, giving them the confidence to design and troubleshoot their own simulations.

Throughout labs and office hours, I guided students through debugging complex code, optimizing performance, and interpreting results — particularly in projects involving astronomical data and physical simulations. I evaluated their code-based assignments, emphasizing clarity, reproducibility, and scientific reasoning in computational work.

This experience deepened my appreciation for the pedagogical side of programming — how effective teaching can turn code into a language for discovery. I learned how to adapt explanations to varying levels of experience, balance technical rigor with approachability, and foster curiosity in students who were programming for the first time. Above all, it reaffirmed my belief that computational physics isn’t just about writing code — it’s about teaching students to think like scientists in the digital age.`
    },
    {
      id: 'phys131-ta',
      title: 'PHYS131 - Introduction to Mechanics',
      type: 'teaching',
      period: 'Sept 2024 – Dec 2024',
      supervisor: 'Dr. Heath Hatch',
      venue: 'UMass Amherst',
      description: 'As a TA for Introduction to Mechanics, I helped first-year physics students develop problem-solving skills and build intuition for classical mechanics. Through labs, office hours, and review sessions, I supported their growth in both conceptual understanding and confidence, reinforcing my passion for teaching physics in accessible, meaningful ways.',
      fullContent: `Physics can be intimidating at first, especially when it's taught as a wall of equations instead of a way to make sense of how the world moves. That's exactly why I loved being a Teaching Assistant for PHYS131 – Introduction to Mechanics.

This course, taught by Prof. Heath Hatch, is often a student's first real encounter with physics, and I saw my role as being both a technical guide and a source of encouragement. I conducted weekly lab sessions, walking students through experimental setups and helping them connect hands-on measurements to Newton's laws, conservation principles, and real-world applications. In office hours, we often went beyond just solving problems. I tried to help students understand why the solution made sense, how to approach problems logically, and how to identify what physical principles were at play.

I also led review sessions before major exams. Rather than just solving a list of questions, I focused on building students' intuition, reframing problems, clarifying core ideas, and encouraging a step-by-step mindset over blind formula-chasing. These sessions often brought students together in collaborative, low-pressure environments that allowed them to ask the questions they were afraid to voice in lecture.

When grading, I put real effort into giving thoughtful feedback, pointing out not just what was incorrect but where the student's reasoning started to slip and how they could approach the problem differently. It felt less like grading and more like coaching.

One of the most satisfying parts of this experience was seeing students who started the semester unsure of their abilities gradually grow in confidence and competence. Some even came back after the course ended to say they were now considering further physics classes, a message that meant the world to me.

This role reaffirmed my belief that science education isn't just about conveying content, it's about empowering students to think critically, solve problems, and embrace complexity. That's what makes teaching such a powerful extension of doing science itself.`
    },
    {
      id: 'astron105-ta',
      title: 'ASTRON105 - Weather and Astronomy',
      type: 'teaching',
      period: 'Feb 2024 – May 2024',
      supervisor: 'Dr. Don Candela',
      venue: 'UMass Amherst',
      description: 'As a TA for "Weather and Astronomy," I helped non-science majors connect everyday weather to the physics and astronomy behind it. From explaining atmospheric phenomena in office hours to grading with clarity and fairness in mind, I worked to demystify science and encourage genuine curiosity about the natural world.',
      fullContent: `Assisting in teaching ASTRON105 left a lasting impact on how I think about physics, astronomy, and the people we share them with.

This general education course, taught by Prof. Don Candela, was designed for non-science majors, a diverse group of students from across the university, many of whom hadn't taken a physics class since high school (and some who'd sworn they never would again). The goal was to explain weather phenomena—clouds, storms, seasons, atmospheric dynamics- through the lens of basic physics and astronomy.

I held weekly office hours, which often became informal, one-on-one sessions about why sunsets are red, how hurricanes form, or how the tilt of the Earth affects our seasons. I learned quickly that this role wasn't about equations or advanced models. It was about telling a story students could see in their own lives; about helping them realize that science wasn't some distant concept, but something happening in the sky above them every day.

Grading assignments also became a form of communication. I prioritized clarity, fairness, and encouragement, especially for students who were nervous about science. My goal was always to highlight what they understood, not just what they missed.

What surprised me most was how many students came away from the course with a newfound appreciation for physics, not because I simplified the material, but because I helped them connect it to their everyday experiences. Seeing them light up at the realization that physics could explain the world, not just confuse them, was incredibly rewarding.

This experience deepened my belief in the importance of scientific literacy, not just for scientists, but for everyone. Because when people understand the forces shaping their world, even just a little, they start to ask better questions, think more critically, and look at the sky with a bit more wonder.`
    },
    {
      id: 'astron100-ta',
      title: 'ASTRON100 - Exploring the Universe',
      type: 'teaching',
      period: 'Sept 2023 – May 2025',
      supervisor: 'Dr. Stephen Schneider',
      venue: 'UMass Amherst',
      description: 'As a Teaching Assistant for "Exploring the Universe," I\'ve helped first-year astronomy majors connect sky simulations to fundamental concepts in celestial mechanics and galactic structure. Through Stellarium-based labs, I\'ve guided students in building both technical skills and astronomical intuition, while mentoring them through their first steps in the field.',
      fullContent: `Teaching "Exploring the Universe" has been one of the most fulfilling parts of my time at UMass, not just because I got to share what I know about astronomy, but because I got to witness something even better: curiosity taking root.

Since Fall 2023, I've been a Teaching Assistant for ASTRON100, an introductory course for first-year astronomy majors focused on observational tools and the structure of the cosmos. My role centered around weekly lab sessions, where students used the Stellarium planetarium software to simulate real-sky observations. What began as helping them figure out keyboard shortcuts soon turned into deeper conversations about celestial motion, coordinate systems, sidereal time, and the geometry of the universe.

I made it a point to emphasize the connection between abstract ideas and real phenomena, like how precession affects star positions over centuries, or why the Moon doesn't eclipse the Sun every month despite its orbit. Helping students connect those dots was incredibly rewarding.

Beyond the technical side of labs, I leaned into the mentorship aspect of the role. Many students were just starting, unsure whether to pursue astrophysics seriously. I made myself available to talk about course loads, summer research opportunities, and what to expect from the major. Some have gone on to explore research projects of their own, which has been especially gratifying.

This position has been a continuous reminder that science isn't just about data and models, it's about people developing the confidence to ask questions, wrestle with ideas, and keep looking up. Watching students evolve from sky-gazing novices to thinkers who can explain stellar evolution and spiral arm dynamics? That's the kind of progress that makes teaching feel like its own kind of discovery.`
    },
    {
      id: 'astronomy-on-tap',
      title: 'Astronomy On Tap, Bengaluru — "You Are My Stardust"',
      type: 'presentation',
      subtype: 'public',
      period: 'Sept 2025',
      venue: 'Cafe Azzure, Bengaluru',
      description: 'A public outreach presentation tracing our cosmic origins — from the Big Bang to the first stars that forged the elements of life. Through storytelling and astrophysics, it explores how stardust became planets, people, and love itself.',
      fullContent: `When I stepped on stage to deliver “You Are My Stardust,” I wasn’t just presenting astrophysics — I was telling a story that began billions of years ago and somehow led to us. This talk was my attempt to bridge two worlds I love equally: science and storytelling.

It all began with a quiet, intimate moment — a whispered line from my girlfriend: “You’re my stardust.” What began as a playful remark soon became the heartbeat of my presentation. I realized that this phrase, often used as metaphor, is in fact literal truth. Every element in our bodies — the iron in our blood, the calcium in our bones, the oxygen in our lungs — was forged in stars that lived and died long before Earth existed.

From that spark, I built a journey for my audience: starting from the Big Bang’s simple ingredients, through the first stars that “cooked” the heavier elements, to the supernovae that scattered those ingredients across galaxies. I used everyday imagery — coffee, chocolate, even cellphones — to show that the cosmos isn’t some distant spectacle but the very material of our lives.

But beyond the science, what mattered to me was the emotional truth — that astrophysics isn’t just about data and equations; it’s about belonging. I wanted people to feel awe not as spectators of the universe, but as participants in it. When I said, “You don’t need a telescope to touch the stars — you just need to breathe,” I watched the room fall silent. That’s when I knew the message had landed.

This presentation became one of the most meaningful experiences of my academic journey because it reminded me why I study the cosmos in the first place: not only to understand how stars form or die, but to tell the grand story of how those stars became us.`,
      links: [
        {
          label: 'Slides',
          url: getAssetPath('/files/Astronomy on Tap BGL Presentation.pdf')
        },
        {
          label: 'Video Recording',
          url: 'https://www.youtube.com/watch?v=example'
        }
      ],
      thumbnail: getAssetPath('/lovable-uploads/AoT_BLR_sept_25.jpg') // added thumbnail
    },
    {
      id: 'astronomy-on-tap-western-mass',
      title: 'Astronomy On Tap, Western Massachusetts — "Star Formation in the Early Universe"',
      type: 'presentation',
      subtype: 'public',
      period: 'May 2025',
      venue: 'New City Brewery, Easthampton',
      description: `Delivered my first public astrophysics talk at the Astronomy on Tap Western Mass event. Presented my research on star formation rates in high-redshift galaxies to a general audience. Selected as the first UMass Astronomy undergraduate to speak at the event. Blended science, storytelling, and humor to make cosmic evolution engaging and accessible.`,
      fullContent: `Astronomy on Tap was where I gave my first public talk on an astrophysics topic — and I couldn’t have asked for a more electric atmosphere. Held in a local bar, the event brought together students, professors, and curious members of the public for a night of stargazing, science, and laughter over pints of beer. Standing in front of that crowd, I felt the thrill of translating years of technical research into a story that anyone could connect with.

My talk, “Star Formation in the Early Universe,” explored how galaxies in the first billion years after the Big Bang formed stars at astonishing rates. I discussed results from my study on star formation rate–stellar mass relationships at high redshifts (z > 6), showing how early galaxies built their stellar populations far more efficiently than those in the modern universe. It was both exciting and surreal to share such cutting-edge cosmological ideas — normally buried in data tables and Python scripts — in a lively, conversational setting.

The experience was transformative. I learned how to communicate complex astrophysics through storytelling, using metaphors, humor, and visuals to bridge the gap between research and wonder. What began as a nerve-wracking challenge quickly became a moment of pure joy — watching people’s faces light up as they pictured galaxies being “born” across cosmic time.

That night reminded me that science isn’t meant to stay locked away in academic papers. It’s meant to be shared — in classrooms, in observatories, and sometimes, in bars — with anyone who looks up at the night sky and feels curious about what’s out there.`,
      links: []
    },
    {
      id: 'astronomy-peer-mentor',
      title: 'Astronomy Peer Mentor',
      type: 'extracurricular',
      period: 'May 2024 – Dec 2024',
      description: `Selected by the Department of Astronomy to mentor three first-year students.
Provided academic and social guidance to ease their transition into university life.
Advised on course planning, research involvement, and departmental opportunities.
Strengthened my leadership and communication through mentorship and community building.`,
      fullContent: `As an astronomy peer mentor, I was invited by the Department of Astronomy to support incoming first-year students during their transition into the program. I was paired with three mentees, each with different academic interests and levels of confidence, and my role was to provide both academic and personal guidance. This included helping them select appropriate introductory courses, understand research opportunities early on, and develop effective study habits for physics and math-heavy classes.

Beyond academics, I focused on creating a welcoming environment within the department. I regularly met with my mentees to check in on their well-being, connected them with resources like tutoring or faculty research groups, and helped them navigate the social and professional aspects of college life. Many of our conversations revolved around managing workload, finding community in astronomy, and balancing curiosity with self-care — lessons I had learned firsthand during my own first year.

This experience deepened my appreciation for mentorship as a two-way process. While I guided my mentees, I also grew in empathy, patience, and leadership. I learned how to adapt advice to individual personalities and to foster confidence in others by listening more than instructing. The most rewarding moments came when I saw my mentees thrive — joining research groups, presenting in class with confidence, and finding their place in the department’s tight-knit community.

Through this experience, I discovered that mentorship in science isn’t just about helping students succeed academically — it’s about building a culture of support, curiosity, and belonging that strengthens the entire field.`
    },
    {
      id: 'astronight-2024',
      title: 'Astro Night Volunteer',
      type: 'extracurricular',
      period: 'Nov 2024',
      venue: 'Orchard Hill Observatory',
      description: `Led public observing sessions during the Leonids meteor shower using the 16-inch Cassegrain telescope.
Guided over 80 visitors through prominent night-sky objects and their astrophysical significance.
Engaged audiences of all ages in discussions about meteor origins, stellar life cycles, and galaxy structure.
Developed strong science communication and public engagement skills through hands-on outreach.`,
      fullContent: `As part of the UMass Astronomy Department’s outreach initiative, I helped organize and lead Astro Night, a public observing session coinciding with the Leonids meteor shower. Using the department’s 16-inch Cassegrain telescope at Orchard Hill Observatory, I guided over 80 visitors—students, faculty, and local community members—through an evening of hands-on stargazing.

Throughout the event, I introduced participants to key astronomical objects such as the Pleiades, Jupiter’s moons, and the Andromeda Galaxy, using each as an opportunity to explain broader astrophysical concepts like stellar evolution, planetary dynamics, and galactic structure. I also discussed the science behind meteor showers, connecting the Leonids’ dazzling display to cometary debris and orbital mechanics.

This experience challenged me to translate complex astrophysical ideas into accessible, engaging stories that could inspire curiosity in audiences with diverse backgrounds. I learned how to adapt explanations for children, undergraduate students, and adults alike—balancing scientific rigor with clarity and enthusiasm.

By the end of the night, what stood out most was the excitement in people’s eyes as they saw Saturn’s rings or a meteor streak for the first time. That moment reaffirmed my passion for sharing astronomy beyond the classroom—turning observation into inspiration and reminding me that science is most powerful when it’s shared.`,
      thumbnail: getAssetPath('/lovable-uploads/AstroNight.jpg')
    },
    {
      id: 'rocketry-structure-lead',
      title: 'Structure Team Lead — UMass Amherst Rocketry Club',
      type: 'extracurricular',
      period: 'Sept 2022 – Aug 2023',
      description: `Led the design and construction of student-built rockets, managing 3D modeling and structural simulations.
Supervised a team of engineers, coordinated project updates, and guided design reviews.
Mentored new members through onboarding meetings and bi-monthly check-ins to support their growth.
Organized STEM outreach, leading hands-on rocketry and coding workshops for 50 high school students.`,
      fullContent: `As the Structure Team Lead of the UMass Rocketry Club, I oversaw the design and fabrication of our competition rockets, guiding my team through every stage—from conceptual 3D modeling to structural stress analysis and full-scale integration. I coordinated with propulsion, avionics, and recovery subsystems to ensure mechanical compatibility and performance reliability. This role strengthened my ability to lead technical discussions, balance creativity with safety, and manage team workflows under tight deadlines. Weekly leadership briefings with subsystem heads helped maintain steady progress and foster collaboration across the entire organization.

Beyond engineering, I was nominated by club members to serve as the New Student Orientation Mentor, helping incoming members transition smoothly into the club’s technical and social environment. I organized onboarding meetings, ran Python-based coding tutorials, and conducted bi-monthly check-ins to track progress and address challenges. Many of these students were new to hands-on engineering, so my goal was to make the learning curve less intimidating and to help them find confidence in contributing to real rocket projects.

In addition to internal mentorship, I led the club’s STEM outreach initiatives, organizing interactive water-rocketry demonstrations and introductory programming activities for over 50 visiting high school students. Through these sessions, I introduced the fundamentals of propulsion physics, flight dynamics, and basic coding in a way that was engaging, accessible, and fun. Seeing students’ excitement as they launched their first model rockets reminded me why I love science communication—because engineering, like science, thrives when curiosity is shared.`,
      thumbnail: getAssetPath('/lovable-uploads/UMass Rocket Team Picture.jpeg')
    }
  ];

  // split presentations to avoid duplicates
  const conferencePresentations = outreachData.filter((d) => d.type === 'presentation' && d.subtype === 'conference');
  const publicOutreachPresentations = outreachData.filter((d) => d.type === 'presentation' && d.subtype === 'public');
  const teaching = outreachData.filter((d) => d.type === 'teaching');
  const extracurriculars = outreachData.filter((d) => d.type === 'extracurricular');

  const ExperienceCard: React.FC<{
    id: string;
    title: string;
    meta?: string;
    abstract: string;
    fullContent?: string;
    links?: { label: string; url: string }[];
    thumbnail?: string;
  }> = ({ id, title, meta, abstract, fullContent, links, thumbnail }) => {
    const isOpen = expanded.has(id);
    return (
      <Card className="bg-card border-cosmic-purple cosmic-glow">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-start md:items-center"> {/* changed: center on md+ */}
              {thumbnail && (
                <img
                  src={thumbnail}
                  alt={`${title} thumbnail`}
                  className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-md object-cover mr-4 flex-shrink-0"
                />
              )}
              <div>
                <CardTitle className="text-lg text-cosmic-bright">{title}</CardTitle>
                {meta && <div className="text-cosmic-star text-sm mt-1">{meta}</div>}
              </div>
            </div>
            <button
              aria-expanded={isOpen}
              onClick={() => toggle(id)}
              className="ml-4 p-2 rounded-full hover:bg-white/5 transition"
              title={isOpen ? 'Collapse' : 'Expand'}
            >
              {isOpen ? <ChevronUp className="w-4 h-4 text-cosmic-star" /> : <ChevronDown className="w-4 h-4 text-cosmic-star" />}
            </button>
          </div>
        </CardHeader>

        <CardContent>
          <p className="text-cosmic-star mb-3">{abstract}</p>

          {isOpen && fullContent && (
            <div className="border-t border-cosmic-purple pt-4 mt-4 text-cosmic-star whitespace-pre-line leading-relaxed">
              {fullContent}
            </div>
          )}

          {links && links.length > 0 && (
            <div className="mt-3 space-x-3">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cosmic-accent hover:text-cosmic-bright underline text-sm"
                >
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-cosmic-dark">
      <Header />

      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-cosmic-bright mb-6">Outreach</h1>
            <p className="text-cosmic-star text-lg max-w-2xl mx-auto">
              Public engagement, presentations, and teaching activities.
            </p>
          </div>

          {/* Presentations */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-cosmic-bright mb-6">Presentations</h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-cosmic-bright mb-4">Conference Presentations</h3>
              <div className="space-y-4">
                {conferencePresentations.map((p) => (
                  <ExperienceCard
                    key={p.id}
                    id={p.id}
                    title={p.title}
                    meta={`${p.period}${p.venue ? ` • ${p.venue}` : ''}`}
                    abstract={p.description}
                    fullContent={p.fullContent}
                    links={[
                      ...(p.abstractUrl ? [{ label: 'Abstract', url: p.abstractUrl }] : []),
                      ...(p.posterUrl ? [{ label: 'Poster', url: p.posterUrl }] : [])
                    ]}
                    thumbnail={p.thumbnail} // pass thumbnail
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-cosmic-bright mb-4">Public Outreach Presentations</h3>
              <div className="space-y-4">
                {/* The Astronomy On Tap entry is included in outreachData as a presentation item */}
                {publicOutreachPresentations.map((p) => (
                  <ExperienceCard
                    key={p.id}
                    id={p.id}
                    title={p.title}
                    meta={`${p.period}${p.venue ? ` • ${p.venue}` : ''}`}
                    abstract={p.description}
                    fullContent={p.fullContent}
                    links={p.links}
                    thumbnail={p.thumbnail} // pass thumbnail
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Teaching experiences */}
          <section>
            <h2 className="text-2xl font-semibold text-cosmic-bright mb-6">Teaching</h2>
            <div className="space-y-4">
              {teaching.map((t) => (
                <ExperienceCard
                  key={t.id}
                  id={t.id}
                  title={t.title}
                  meta={`${t.period}${t.supervisor ? ` • ${t.supervisor}` : ''}`}
                  abstract={t.description}
                  fullContent={t.fullContent}
                />
              ))}
            </div>
          </section>

          {/* Extracurriculars */}
          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-cosmic-bright mb-6">Extracurriculars</h2>
            <div className="space-y-4">
              {extracurriculars.map((e) => (
                <ExperienceCard
                  key={e.id}
                  id={e.id}
                  title={e.title}
                  meta={`${e.period}${e.venue ? ` • ${e.venue}` : ''}`}
                  abstract={e.description}
                  fullContent={e.fullContent}
                  thumbnail={e.thumbnail}
                  links={e.links}
                />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Outreach;
