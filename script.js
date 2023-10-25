class OutOfRangeError extends Error {
    constructor(arg) {
        super(`Expression should only consist of integers and +-/* characters and not ${arg}`);
        this.name = 'OutOfRangeError';
    }
}

class InvalidExprError extends Error {
    constructor() {
        super('Expression should not have an invalid combination of operators');
        this.name = 'InvalidExprError';
    }
}

function evalString(expression) {
    try {
        if (/[\+\-\/\*]{2,}/.test(expression)) {
            throw new InvalidExprError();
        }

        if (/^[\+\/\*]/.test(expression)) {
            throw new SyntaxError('Expression should not start with invalid operator');
        }

        if (/[\+\/\*\-]$/.test(expression)) {
            throw new SyntaxError('Expression should not end with invalid operator');
        }

        // Rest of the logic for evaluating the expression if necessary
        // ...

        return eval(expression); // For demonstration purposes, evaluate the expression
    } catch (error) {
        if (error instanceof InvalidExprError || error instanceof SyntaxError) {
            throw error;
        } else {
            throw new Error('An unexpected error occurred');
        }
    }
}
