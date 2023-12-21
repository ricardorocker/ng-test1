import { UniqueIdService } from './unique-id.service';

// describe('O artefato que queremos testar', () => {
//   it('Primeira condição que queremos testar', () => {});

//   it('Segunda condição que queremos testar', () => {});

//   it('blablabla should blablabla when blablabla', () => {});
// });

// describe('UniqueIdService', () => {
//   it('#generateUniqueIdWithPrefix should generate id when called with prefix', () => {
//     const service = new UniqueIdService();
//     const id = service.generateUniqueIdWithPrefix('app');
//     expect(id).toContain('app-');
//   });
// });

describe(UniqueIdService.name, () => {
  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
    const service = new UniqueIdService();
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should not generate duplicate IDs when called multiple times`, () => {
    const service = new UniqueIdService();
    const ids = new Set();
    for (let i = 0; i < 50; i++) {
      ids.add(service.generateUniqueIdWithPrefix('app'));
    }
    expect(ids.size).toBe(50);
  });
});
