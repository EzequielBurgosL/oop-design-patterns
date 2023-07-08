# First Pattern (Builder)

We have a car factory and we want to implement an application for building a car step by step.

A car has the following characteristics:

- Model
- Color
- Transmission (Automatic or Manual)
- Engine (Gasoline, Diesel, Electric)
- Extras (GPS, Sunroof, Heated Seats)

Design and implement the module for creating cars using TDD.

# Creational Patterns

We want to create a general application for building mobile devices.

This configurator should work for multiple brands: Apple, Xiaomi, Samsung, ...

The devices have the following components:

- Display
- CPU
- Battery
- Camera

Assume that each brand ONLY has one model of mobile device.

Considerations:

- Xiaomi and Samsung share the Display and CPU.
- Samsung and Apple share the Battery.

**TASK 1**: Design a UML class diagram for the application. What design pattern could help us solve the problem?

We want to introduce a new brand, OPPO, that uses the same CPU, display, and battery as Xiaomi, but not the camera.

**TASK 2**: Add OPPO to the diagram.

**TASK 3**: Implement the application only for Xiaomi and Samsung brands using TDD.

# Structural Patterns

We have several challenges that can be solved using a structural pattern.

Design and implement the following exercises using TypeScript, considering the pattern that solves the problem.

1. We have a system with some functions that are very computationally expensive and take a long time to execute. We cannot change the logic of these functions.
   _How do we solve this problem in TypeScript?_
   _Which design pattern helps us?_
   This technique is very common in the software world. _What is it called?_
   _Do you know something similar in ReactJS?_

2. We are building an application for airline check-in. During the process, the user can choose different options to complement their ticket. They can choose one or a combination of several options:

   - Add luggage
   - Select a seat
   - Upgrade to business class
   - Purchase insurance
   - Add meals

   Assuming we have an instance of a Ticket class with some flight attributes (code, origin, destination, date).
   _How would you implement the system in TypeScript so that we can add these extras to a ticket?_
   _Which pattern facilitates the resolution of the problem?_

3. We have been hired to create an application for an online university. A course entity consists of different elements that can be placed at any hierarchical level:

   - Post
   - Video
   - Podcast
   - Links

   Each element, in addition to having information, can contain sub-elements of any type except itself. For example:

   A post, besides having a title and description, can contain a podcast, links, videos, or all of them at once.

# Behavioral patterns

We have an application that has a list of person objects with properties (name, surname, age, children [number of children]). In the application, we can SORT the list by name (ascending and descending order), age (ascending and descending order), and number of children (ascending and descending order). Additionally, we can associate sorting with both a button and a shortcut (invent the shortcut).

Implement the solution in multiple ways:

- Entirely with classes, without worrying that we are in JS.
- Using JS with generator functions.
- Using Symbol.iterator.

Hint: There are two patterns to implement in the exercise.

## Weather Station

We need to create an application for a weather station. We will receive real-time data from different humidity and temperature devices from different points in a city through a socket.

The data will be displayed on two different displays, one for humidity and one for temperature.

Design and implement the system. To simulate real-time data, you can create an entity that generates new data every second using `setInterval`, simulating the socket.

Humidity is measured in % and temperature in ºC.

## Banking

Create a program that simulates a chain of bank account holders. Each account holder can approve or reject a transaction request. The transaction request should be passed through the chain of accounts starting with the first account holder. If the first account holder approves the request, it should be passed on to the next account holder in the chain. If the first account holder rejects the request, the process should stop and the request should not be passed on to any other account holders.

- Step 1: Create a base class "AccountHolder" with the following properties:

  - name (string)
  - nextAccountHolder (AccountHolder)

- Step 2: Create a class "TransactionRequest" with the following properties:

  - amount (float)
  - description (string)

- Step 3: Create a method "approveTransaction" in the AccountHolder class that takes in a TransactionRequest as a parameter. The method should return a boolean indicating whether the transaction was approved or rejected.

- Step 4: Create two subclasses of AccountHolder: "Manager" and "Supervisor". Both classes should inherit from the AccountHolder class and override the "approveTransaction" method. The Manager class should approve transactions under $1000 and the Supervisor class should approve transactions under $5000.

- Step 5: Create a "main" method that creates a chain of account holders: AccountHolder1 (Manager) -> AccountHolder2 (Supervisor) -> AccountHolder3 (Manager).

- Step 6: Create a TransactionRequest object and pass it through the chain of account holders starting with AccountHolder1. Print out whether the transaction was approved or rejected by each account holder in the chain.

- Step 7: Test the program by passing in a transaction request with an amount of $1500 and verify that it is approved by AccountHolder1 and AccountHolder3 but rejected by AccountHolder2.
