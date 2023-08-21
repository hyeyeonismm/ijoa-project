package com.example.ijoa.Domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
public class ChatRoom {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int chat_id;
    @ManyToOne
    private KidCare kidCare;
    @ManyToOne
    private Client client;
    @ManyToOne
    private Applier applier;
    @OneToMany(mappedBy = "chat_room")
    private List<ChatMessage> chatMessages;
}
