import React from 'react';

const NavBar = () => {
  return (
    <div
      style={{backgroundColor: '#292929',
              padding: '16px',
              fontSize: '1.5em',
              color: '#e1e1e1'}}>
      <div style={{
        fontFamily: 'Pacifico, cursive',
        fontSize: '24px',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <svg height="30" viewBox="0 0 500 500" width="30" xmlns="http://www.w3.org/2000/svg" style={{ fill: '#e1e1e1', marginRight: '10px' }}><path d="m312 408h-32v-16h32c4.40625 0 8-3.59375 8-8v-35.929688c0-3.550781-2.382812-6.71875-5.808594-7.695312l-39.015625-11.152344c-5.191406-1.480468-9.785156-4.71875-12.9375-9.125l-31.964843-44.753906c-1.496094-2.085938-3.929688-3.34375-6.503907-3.34375h-111.539062c-2.574219 0-5.007813 1.257812-6.511719 3.351562l-31.957031 44.746094c-3.152344 4.40625-7.746094 7.644532-12.945313 9.132813l-39.007812 11.144531c-3.425782.976562-5.808594 4.136719-5.808594 7.695312v35.929688c0 4.40625 3.59375 8 8 8h32v16h-32c-13.230469 0-24-10.769531-24-24v-35.929688c0-10.65625 7.160156-20.148437 17.40625-23.078124l39.019531-11.152344c1.734375-.496094 3.261719-1.574219 4.316407-3.046875l31.960937-44.746094c4.496094-6.285156 11.800781-10.046875 19.527344-10.046875h111.53125c7.726562 0 15.03125 3.761719 19.527343 10.046875l31.96875 44.753906c1.046876 1.472657 2.574219 2.542969 4.300782 3.039063l39.027344 11.152344c10.253906 2.929687 17.414062 12.421874 17.414062 23.078124v35.929688c0 13.230469-10.769531 24-24 24zm0 0"/><path d="m248 336h-160l36-48h88zm0 0" fill="#f0bc5e"/><path d="m176 392v-16h-16v16h-40v16h96v-16zm0 0"/><path d="m160 336h16v24h-16zm0 0"/><path d="m479.472656 158.785156-14.929687 5.757813c10.257812 26.601562 15.457031 54.671875 15.457031 83.457031 0 53.039062-17.929688 101.9375-48 141.039062v-29.039062h-16v-160h-16v160h-16v-160h-16v160h-16v64h-264v16h3.097656c44.148438 36.113281 99.726563 56 156.902344 56 136.742188 0 248-111.257812 248-248 0-30.753906-5.558594-60.777344-16.527344-89.214844zm-263.472656 281.214844h64v16h-64zm-80 11.007812c-6.160156-3.398437-12.183594-7.054687-18.03125-11.007812h18.03125zm16-11.007812h48v16h-48zm96 40c-20.496094 0-40.769531-2.734375-60.3125-8h120.625c-19.242188 5.183594-39.449219 8-60.3125 8zm96-24h-48v-16h48zm16-4.910156v-11.089844h18.078125c-5.839844 3.96875-11.878906 7.65625-18.078125 11.089844zm38.902344-27.089844h-30.902344v-48h48v31.71875c-5.425781 5.707031-11.128906 11.152344-17.097656 16.28125zm0 0"/><path d="m88 440c-22.054688 0-40-17.945312-40-40s17.945312-40 40-40 40 17.945312 40 40-17.945312 40-40 40zm0 0" fill="#f0bc5e"/><path d="m80 392h16v16h-16zm0 0"/><path d="m248 440c-22.054688 0-40-17.945312-40-40s17.945312-40 40-40 40 17.945312 40 40-17.945312 40-40 40zm0 0" fill="#f0bc5e"/><path d="m240 392h16v16h-16zm0 0"/><path d="m16.527344 337.207031c-10.96875-28.4375-16.527344-58.453125-16.527344-89.207031 0-136.742188 111.257812-248 248-248 31.382812 0 61.984375 5.792969 90.9375 17.199219l-5.867188 14.878906c-27.078124-10.664063-55.703124-16.078125-85.070312-16.078125-127.929688 0-232 104.070312-232 232 0 28.777344 5.199219 56.855469 15.464844 83.457031zm0 0"/><path d="m240 176h-88c-17.648438 0-32-14.351562-32-32s14.351562-32 32-32h16v16h-16c-8.824219 0-16 7.175781-16 16s7.175781 16 16 16h88zm0 0"/><path d="m256 160h16v16h-16zm0 0"/><path d="m176 224h-88c-17.648438 0-32-14.351562-32-32s14.351562-32 32-32h16v16h-16c-8.824219 0-16 7.175781-16 16s7.175781 16 16 16h88zm0 0"/><path d="m192 208h16v16h-16zm0 0"/><path d="m392 208c-57.34375 0-104-46.65625-104-104s46.65625-104 104-104 104 46.65625 104 104-46.65625 104-104 104zm0-168c-35.289062 0-64 28.710938-64 64s28.710938 64 64 64 64-28.710938 64-64-28.710938-64-64-64zm0 0" fill="#f0bc5e"/><path d="m384 144h-16v-72h32c13.230469 0 24 10.769531 24 24s-10.769531 24-24 24h-16zm0-40h16c4.40625 0 8-3.59375 8-8s-3.59375-8-8-8h-16zm0 0"/><path d="m392 176c-39.695312 0-72-32.304688-72-72 0-16.089844 5.246094-31.335938 15.167969-44.113281l12.632812 9.816406c-7.722656 9.9375-11.800781 21.800781-11.800781 34.296875 0 30.878906 25.121094 56 56 56 12.496094 0 24.359375-4.078125 34.296875-11.800781l9.816406 12.632812c-12.777343 9.921875-28.023437 15.167969-44.113281 15.167969zm0 0"/><path d="m448.832031 148.113281-12.632812-9.816406c7.722656-9.9375 11.800781-21.800781 11.800781-34.296875 0-30.878906-25.121094-56-56-56-12.496094 0-24.359375 4.078125-34.296875 11.800781l-9.816406-12.632812c12.777343-9.921875 28.023437-15.167969 44.113281-15.167969 39.695312 0 72 32.304688 72 72 0 16.089844-5.246094 31.335938-15.167969 44.113281zm0 0"/></svg>
        <span>wheretopark.sg</span>
      </div>
    </div>
  )
}

export default NavBar
