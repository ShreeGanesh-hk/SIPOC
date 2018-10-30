import { ProjectdetailsModule } from './projectdetails.module';

describe('ProjectdetailsModule', () => {
  let projectdetailsModule: ProjectdetailsModule;

  beforeEach(() => {
    projectdetailsModule = new ProjectdetailsModule();
  });

  it('should create an instance', () => {
    expect(projectdetailsModule).toBeTruthy();
  });
});
