    
/**
* Use this file to define custom functions and blocks.
* Read more at https://arcade.makecode.com/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two,
    //% block="three"
    Three,
    //% block="four"
    Four,
    //% block="five"
    Five,
    //% block="six"
    Six
}

/**
 * Custom blocks
 */
//% weight=100 color=#000000 icon="➕"
namespace xtraMath{
    /**
     * Finds the floor of any real value, n. In other words, it finds the closest integer to n that is also less than n.
     * @param n may be any real constant
     */
    //% block
    export function floor(n: number): number {
        return Math.floor(n)
    }

    /**
     * Finds the ceiling of any real value, n. In other words, it finds the closest integer to n that is also greater than n.
     * @param n may be any real constant
     */
    //% block
    export function ceiling(value: number): number {
        return Math.ceil(value)
    }

       /**
     * Finds the value of dividend (mod modulus), where the dividend and modulus may be any real value.
     * @param dividend may be any real value
     * @param modulus may be any real value
    //% block
    export function modulo(value: number, value2: number): number {
        return value % value2
}

   /**
     * Finds the sum of the real roots of a real polynomial taken equal to zero.
     * @param firstCoefficient may be any real value
     * @param secondCoefficient may be any real value
     */
    //% block
    export function sumOfRootsInPolynomialGivenFirstAndSecondCoefficients(a: number, b: number): number {
        return -b/a
    }
    /**
     * Finds the product of the real roots of a real polynomial taken equal to zero.
     * @param firstCoefficient may be any real value
     * @param lastCoefficient may be any real value
     */
    //% block
    export function productOfRootsInPolynomialGivenFirstAndLastCoefficients(a: number, b: number): number {
        return b/a
    }
    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
     //% block
     export function differentiateBeta(expression: string): string {
         const length = expression.length
         let character = 1
        let newExpression = expression.charAt(0)
        while (character < length+1) {
            if (expression.charAt(character)=="+") {
        newExpression = newExpression + "+"
        character += 1
            } else if (expression.charAt(character)=="-") {
        newExpression = newExpression + "-"
            character += 1
            } else if (expression.charAt(character)=="x"){
        newExpression = newExpression + "x"
        character += 1
            } else if (expression.charAt(character)=="^"){
                let correct = true
                let checkAmount = 1
                while (correct && character + checkAmount < length + 1) {
                    if (!(expression.charAt(character + checkAmount) == "+" || expression.charAt(character + checkAmount) == "-" || expression.charAt(character + checkAmount) == "x")) {
                        checkAmount += 1
                    } else {
                        correct = false
                    }
                }
                if (parseInt(expression.substr(character + 1, checkAmount)) == 1) {
                    newExpression = newExpression.substr(0, character-1)+"1"
                    character += 2
                } else if (parseInt(expression.substr(character + 1, checkAmount))==2) {
                    character += 2
                } else {
                newExpression = newExpression + "^"
                newExpression = newExpression + (parseInt(expression.substr(character+1, checkAmount))-1)
                character += checkAmount
                }
            } else {
                newExpression = newExpression + expression.charAt(character)
        character += 1        
            }
        }
         return newExpression
     }
}