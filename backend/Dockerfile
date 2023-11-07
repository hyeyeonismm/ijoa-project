# Backend Dockerfile
FROM openjdk:17
ARG JAR_PATH=./build/libs
COPY ${JAR_PATH}/IJOA-0.0.1-SNAPSHOT.jar .
ENV TZ=Asia/Seoul
ENTRYPOINT ["java", "-jar", "IJOA-0.0.1-SNAPSHOT.jar"]