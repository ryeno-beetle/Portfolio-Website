import { useState } from 'react';
import '../index.css';
import './Pages.css';
function Research() {

  return (
    <>
      <div className="project-block">
        <h1 className="title">How Playwrights Use Software: Towards Writing Support Tools for Performance (Research Paper)</h1>
        <p>I co-authored this paper (received Best Paper Award at C&C 2026) about how playwrights’ unique practices and needs shape their use of writing software!</p>
        <p>Throughout the research project, I helped design study protocol for workshops, recruited playwrights, facilitated workshop studies, coded and analyzed workshop data, conducted literature review, and did comparative analysis of writing tools.</p>
        <p><a href="https://dl.acm.org/doi/10.1145/3803784.3807548" target="_blank" rel="noopener noreferrer">Read the paper here!</a></p>
        <p><strong>Abstract:</strong> Playwrights use writing support tools to craft scripts for the stage. However, these tools are not attuned to the challenges of creating live performance and navigating theater ecosystems, instead complicating and constraining playwrights’ processes. Through thematic analysis of focus groups with 13 playwrights, we explored how playwrights’ creative needs and communities inform their tool use, and how playwrights adapt to tools that fail to meet their needs. We found three themes in playwriting processes: scaffolding communities of practice, incorporating voice and body into writing processes, and managing script elasticity across the theater lifecycle. We discuss lenses of embodied practice and non-normative time through which researchers can better understand creative writers’ overlooked writing behaviors and processes. To guide the development of playwriting support tools, we offer design considerations around enabling speech, visualizing performers, and contextualizing version management. By spotlighting playwrights, we illuminate how performance can inform creative writing support research.</p>
      </div>

      <div className="project-block">
        <h1 className="title">Playground: A Two-Part Visual Document Management and Script Editing Tool for Playwrights (Research Poster)</h1>
        <p>After completing the first playwriting study above, we used what we learned to start designing a tool that could help support playwrights' writing processes.</p>
        <p>We compiled our tool prototype and research into a poster and extended abstract (accepted to UIST 2026):</p>
        [put the poster here]
        <p>We ended up prototyping a tool with two parts: a <strong>canvas</strong> that displays documents spatially and allows for complex version management, and a <strong>text editor</strong> built for writing stageplays.</p>
        <p>For development, we used React with Vite, Tauri, tldraw, and Quill.</p>
        <p>We also conducted one-on-one interviews with many of the playwrights from our previous study to gather feedback on the tool. In the future, we hope to iterate based on their feedback and conduct diary studies!</p>
        <p><strong>Abstract:</strong> The writing support tools that playwrights use are often poorly attuned to the challenges and constraints of writing scripts for live performance. We present Playground, a two-part writing support and version control prototype for playwriting that displays documents spatially on a 2D canvas alongside a text editor tailored for writing stageplays. Playground’s two components, the canvas and the text editor, afford playwrights the ability to flexibly create and visually arrange versions of their documents. Playground supports playwriting nonlinearity and stageplay script elasticity by allowing playwrights to easily restructure their writing, to navigate script histories, and to organize, connect, and differentiate documents.</p>
      </div>
    </>
  );
}

export default Research;
