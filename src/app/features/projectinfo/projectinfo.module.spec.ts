import { ProjectinfoModule } from './projectinfo.module';

describe('ProjectinfoModule', () => {
  let projectinfoModule: ProjectinfoModule;

  beforeEach(() => {
    projectinfoModule = new ProjectinfoModule();
  });

  it('should create an instance', () => {
    expect(projectinfoModule).toBeTruthy();
  });
});
