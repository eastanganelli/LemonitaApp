import { TestBed } from '@angular/core/testing';
import { CalculatorService } from './calculator.service';
describe('CalculatorService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(CalculatorService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=calculator.service.spec.js.map