import { TestBed } from '@angular/core/testing';

import { AddStudentService } from './add-student.service';

describe('AddStudentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddStudentService = TestBed.get(AddStudentService);
    expect(service).toBeTruthy();
  });
});
