import { TestBed } from '@angular/core/testing';
import { GlobalVarsService } from './global-vars.service';
describe('GlobalVarsService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(GlobalVarsService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=global-vars.service.spec.js.map