import { UniqueIdService } from './unique-id.service';

// describe('O artefato que queremos testar', () => {
//   it('Primeira condição que queremos testar', () => {});

//   it('Segunda condição que queremos testar', () => {});

//   it('blablabla should blablabla when blablabla', () => {});
// });

// describe('UniqueIdService', () => {
//   it('#generateUniqueIdWithPrefix should generate id when called with prefix', () => {
//     const service = new UniqueServiceId();
//     const id = service.generateUniqueIdWithPrefix('app');
//     expect(id).toContain('app-');
//   });
// });

describe(UniqueIdService.name, () => {
  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
    const service = new UniqueIdService();
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id).toContain('app-');
  });
});
