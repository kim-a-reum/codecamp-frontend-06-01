import styled from "@emotion/styled";
import React from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFountainPreset } from "tsparticles-preset-fountain";


const MyPop = styled(Particles)`
width: 100px;
height: 100px;

`

export default class ParticlesContainer extends React.PureComponent<IProps> {
  // this customizes the component tsParticles installation
  async customInit(engine: Engine): Promise<void> {
    // this adds the preset to tsParticles, you can safely use the
    loadFountainPreset(engine);
  }

  render() {
    const options = {
      preset: "fountain",
    };

    return(
<>
<script src="https://cdn.jsdelivr.net/npm/tsparticles@1/tsparticles.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/tsparticles-preset-fountain@1/tsparticles.preset.fountain.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/tsparticles-preset-fountain@1/tsparticles.preset.fountain.bundle.min.js"></script>
        <Particles options={options} init={this.customInit} />
</>
    )
  }
}