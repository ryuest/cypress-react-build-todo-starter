describe('Footer', () => {
    context('with a single todo', () => {
        it('displays a singular todo in count', () => {
            cy.seedAndVisit([{
                id: 1,
                name: 'Buy milk',
                isComplete: false
            }])
            cy.get('.todo-count')
                .should('contain', '1 todo left')
        })
    })

    context('with multiple todos', () => {
        beforeEach(() => {
            cy.seedAndVisit()
        })

        it('diplayed plural todos in count', () => {
            cy.get('.todo-count')
                .should('contain', '3 todos left')
        })
        it('Handles filter links', () => {
            const filters = [{
                    link: 'Active',
                    expectedLenght: 3
                },
                {
                    link: 'Completed',
                    expectedLenght: 1
                },
                {
                    link: 'All',
                    expectedLenght: 4
                }

            ]
            cy.wrap(filters)
                .each(filter => {
                    cy.contains(filter.link)
                        .click()
                    cy.get('.todo-list li')
                        .should('have.length', filter.expectedLenght)
                })
        })

    })
})