FROM maven:3.8.3-openjdk-17 AS build
COPY . .
RUN mvn clean package -DskipTests

FROM  openjdk:17.0.1-jdk-slim
COPY --from=build /target/Employee_Management-0.0.1-SNAPSHOT.jar Employee_Management.jar
EXPOSE 8080
ENTRYPOINT [ "java","-jar","Employee_Management.jar" ]